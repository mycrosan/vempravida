<template>
    <div>
        <div class="container">
<!--            <pre>-->
<!--            {{users | json}}-->
<!--            </pre>-->
            <div class="intro h-100">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-md-6">
                        <h3>Lista de Membros ({{users.length}})</h3>

                        <p>
                            Os membros cadastrados são listados abaixo, você pode editar os dados dos usuários dos
                            sistema.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <button @click="addNew" class="btn btn-primary float-right">Adicionar membro</button>
                    </div>
                </div>
            </div>
            <b-container fluid>
                <!-- User Interface controls -->
                <b-row>
                    <b-col lg="6" class="my-1">
                        <b-form-group
                                label="Pesquisa"
                                label-cols-sm="2"
                                label-align-sm="left"
                                label-size="sm"
                                label-for="filterInput"
                                class="mb-0"
                        >
                            <b-input-group size="sm">
                                <b-form-input
                                        v-model="filter"
                                        type="text"
                                        id="filterInput"
                                        placeholder="Insira um nome para pesquisa"
                                        autocomplete="off"
                                ></b-form-input>
                                <b-input-group-append>
                                    <b-button :disabled="!filter" @click="filter = ''">Limpar</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                    </b-col>

                    <b-col sm="5" md="4" class="my-1">
                        <b-form-group
                                label="Por página"
                                label-cols-sm="6"
                                label-cols-md="3"
                                label-cols-lg="3"
                                label-align-sm="left"
                                label-size="sm"
                                label-for="perPageSelect"
                                class="mb-0"
                        >
                            <b-form-select
                                    v-model="perPage"
                                    id="perPageSelect"
                                    size="sm"
                                    :options="pageOptions"
                            ></b-form-select>
                        </b-form-group>
                    </b-col>


                </b-row>

                <!-- Main table element -->
                <b-table
                        show-empty
                        small
                        stacked="md"
                        :items="users"
                        :fields="campos"
                        :current-page="currentPage"
                        :per-page="perPage"
                        :filter="filter"
                        :filterIncludedFields="filterOn"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                        :sort-direction="sortDirection"
                        @filtered="onFiltered"
                >
                    <template v-slot:cell(name)="row">
                        {{ row.item.name }}
                    </template>

                    <template v-slot:cell(actions)="row">
                        <div>{{checkUserExist(row.item.cpf)}}</div>
                        <a href="javascript:void(0)" @click="editUser(row.item)"><i
                                class="fas fa-pencil-alt"></i>
                        </a>
                        <a href="javascript:void(0)" @click="deleteUser(row.item, row.uid)"><i
                                class="fas fa-trash red pl-3"></i></a>

                        <span v-if="row.item.credencial && !(row.item.credencial ? row.item.credencial.assinado : false)"
                              title="Aguardando assinatura"><i
                                class="far fa-id-card pl-3"></i></span>
                        <span v-else-if="row.item.credencial ? row.item.credencial.assinado : false" title="Assinada"><i
                                class="fas fa-id-card green pl-3"></i></span>
                        <!--                    <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">-->
                        <!--                        Info modal-->
                        <!--                    </b-button>-->
                        <!--                    <b-button size="sm" @click="row.toggleDetails">-->
                        <!--                        {{ row.detailsShowing ? 'Hide' : 'Show' }} Details-->
                        <!--                    </b-button>-->
                    </template>

                    <template v-slot:row-details="row">
                        <b-card>
                            <ul>
                                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                            </ul>
                        </b-card>
                    </template>
                </b-table>
                <div class="">
                    <b-col sm="7" md="12" class="my-1">
                        <b-pagination
                                v-model="currentPage"
                                :total-rows="totalRows"
                                :per-page="perPage"
                                align="center"
                                size="sm"
                                class="my-0"
                        ></b-pagination>
                    </b-col>
                </div>
                <!-- Info modal -->
                <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
                    <pre>{{ infoModal.content }}</pre>
                </b-modal>
            </b-container>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">

                    <div class="modal-header border-bottom-0">
                        <h5 class="modal-title" id="editLabel">Membro</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form-data-user v-if="user" :user="user" :modal="modal"></form-data-user>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import {VueEditor} from "vue2-editor"
import {fb, db} from '../firebase'
import FormDataUser from "../components/FormDataUser"
import fbs from "../services/fireService"

export default {
  name: "Users",
  components: {
    FormDataUser,
    VueEditor
  },
  props: {
    msg: String
  },
  data () {
    return {
      campos: [
        {key: 'name', label: 'Nome', sortable: true, sortDirection: 'desc'},
        {key: 'cargo_ministerial', label: 'Cargo', sortable: true, class: ''},
        {key: 'phone', label: 'Telefone', sortable: true, class: ''},
        {
          key: 'status',
          label: 'Status',
          formatter: (value, key, item) => {
            return value ? 'Ativo' : 'Inativo'
          },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true
        },
        {key: 'actions', label: 'Actions'}
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 16,
      pageOptions: [16, 32, 64, 128, 256],
      sortBy: 'name',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      users: [],
      estado_civil_options: [
        'Casado(a)',
        'Solteiro(a)',
        'Divorciado(a)',
        'Viúvo(a)',
        'Outros',
        'Não informado'
      ],
      escolaridade_options: [
        'Fundamental',
        'Médio',
        'Superior',
        'Pós Graduação',
        'Mestrado',
        'Doutorado',
        'Não informado'
      ],
      cargo_options: [
        'Pastor',
        'Evangelista',
        'Presbítero',
        'Diácono',
        'Diaconísa',
        'Auxiliar',
        'Membro',
        'Congregado(a)',
        'Não informado'
      ],
      perfil_options: [
        'root',
        'admin',
        'secretaria',
        'tesouraria',
        'membro',
        'usuario'
      ],
      estados: '',
      municipios: '',
      user: {},
      activeItem: null,
      modal: null,
      tag: null
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our campos
      return this.campos
        .filter(f => f.sortable)
        .map(f => {
          return {text: f.label, value: f.key}
        })
    }
  },
  created () {
    this.getUsers()
  },

  methods: {
    async getUsers () {
      const user = fb.auth().currentUser
      let values = await fbs.where('users', 'status', '==', true).then(function (response) {
        return response
      })
      this.users = values
      this.totalRows = this.users.length
      this.currentPage = 1
    },
    info (item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal () {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    checkUserExist (email) {
      fbs.where('users', 'email', '==', email).then((response) => {
      })
    },
    deleteImage (img, index) {

      let image = fb.storage().refFromURL(img);

      this.user.images.splice(index, 1);

      image.delete().then(function () {
        console.log('image deleted');
      }).catch(function (error) {
        // Uh-oh, an error occurred!
        console.log('an error occurred');
      });

    },

    addTag () {
      this.user.tags.push(this.tag);
      this.tag = "";
    },
    uploadImage (e) {

      if (e.target.files[0]) {

        let file = e.target.files[0];

        var storageRef = fb.storage().ref('products/' + Math.random() + '_' + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on('state_changed', (snapshot) => {

        }, (error) => {
          // Handle unsuccessful uploads
        }, () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...

          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.user.images.push(downloadURL);
          });
        });
      }
    },
    reset () {
      this.user = {
        name: '',
        perfil: '',
        dt_birth: '',
        naturalidade: '',
        nacionalidade: '',
        nm_pai: '',
        nm_mae: '',
        estado_civil: '',
        rg: '',
        cpf: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: '',
        profissao: '',
        cargo_ministerial: '',
        sexo: '',
        escolaridade: '',
        data_admissao: '',
        data_batismo: '',
        modo_admissao: '',
        telefone1: '',
        telefone2: '',
        email: '',
        obs: '',
        tags: [],
        images: [],
        status: true
      }
    },

    addNew () {
      this.modal = 'new';
      this.reset();
      $('#product').modal('show');
    },
    updateUser () {
      this.$firestore.users.doc(this.user.id).update(this.user);
      Toast.fire({
        type: 'success',
        title: 'Updated  successfully'
      })

      $('#product').modal('hide');
    },

    editUser (user) {
      this.getMunicipios()
      this.getEstados()
      this.modal = 'edit';
      this.user = user;
      $('#product').modal('show');
    },


    deleteUser (doc) {
      Swal.fire({
        text: "Tem certeza que desejar excluir?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, excluir!',
        cancelButtonText: 'Cancelar!'
      }).then((result) => {
        if (result.value) {
          doc.dt_delete = new Date()
          doc.status = false
          console.log(doc.uid)
          let indexForDelete = _.findIndex(this.users, {uid: doc.uid})
          console.log(indexForDelete)
          console.log(this.users)
          this.users.splice(indexForDelete, 1)
          db.collection('users').doc(doc.uid).update(doc).then(function () {
            Toast.fire({
              type: 'success',
              title: 'Excluído com sucesso!'
            })
          })
        }
      })
    },
    readData () {
    },
    getMunicipios () {
      this.$http.get('/municipios.json').then(response => {
        this.municipios = response.body
      }, response => {
        console.log('Erro ao buscar estados')
      })
    },
    getEstados () {
      this.$http.get('/estados.json').then(response => {
        this.estados = response.body
      }, response => {
        console.log('Erro ao buscar estados')
      })
    },
    addUser () {
      db.collection("users").add(this.user)
        .then(function () {
          console.log("Document successfully written!");
          Toast.fire({
            type: 'success',
            title: 'User created successfully'
          })
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      $('#product').modal('hide');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .img-wrapp {
        position: relative;
    }

    .img-wrapp span.delete-img {
        position: absolute;
        top: -14px;
        left: -2px;
    }

    .img-wrapp span.delete-img:hover {
        cursor: pointer;
    }

</style>
