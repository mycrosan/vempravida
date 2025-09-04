<template>
  <div class="lancamentos">
    <div class="container">

      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-12">
            <h3>Tesouraria</h3>

            <p>
              Dados financeiros
            </p>
          </div>
        </div>
      </div>

      <hr>

      <div class="lancamento-test">


        <h3 class="d-inline-block">Lançamentos</h3>
        <button @click="addNew('output')" class="btn btn-outline-dark float-right">Saída</button>
        <button @click="addNew('input')" class="btn btn-outline-success float-right mr-2">Entrada</button>

        <div class="table-responsive">

          <table class="table">
            <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Tipo</th>
              <th>Data</th>
              <th class="align-right">Ações</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="lancamento in lancamentos">
              <td>
                {{ lancamento.name }}
              </td>

              <td>
                {{ lancamento.price }}
              </td>

              <td>
                {{ lancamento.category }}
              </td>

              <td>
                {{ lancamento.type_input == null ? "SI" : (lancamento.type_input == 'input' ? "Entrada" : "Saída") }}
              </td>

              <td>
                {{ lancamento.dt_create == null ? "SI" : lancamento.dt_create | moment("DD/MM/YYYY H:mm")}}
              </td>

              <td class="align-right">

<!--                <a href="javascript:void(0)" @click="editUser(row.item)"><i-->
<!--                    class="fas fa-pencil-alt"></i>-->
<!--                </a>-->

                <button class="btn btn-primary mr-2" @click="editlancamento(lancamento)"><i
                    class="fas fa-pencil-alt"></i></button>
                <button class="btn btn-danger" @click="deletelancamento(lancamento)"><i
                    class="fas fa-trash"></i></button>
              </td>

            </tr>


            </tbody>
          </table>
        </div>

      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="lancamento" tabindex="-1" role="dialog" aria-labelledby="editLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Lançamento de {{(lancamento.type_input == 'input') ? 'entrada' : 'saída'}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div class="row">
              <!-- main lancamento -->
              <div class="col-md-8">
                <div class="form-group">
                  <label>Nome</label>
                  <input type="text" placeholder="Nome" v-model="lancamento.name"
                         class="form-control">
                </div>

                <div class="form-group">
                  <label>Detalhes</label>
                  <vue-editor placeholder="Detalhes" v-model="lancamento.description"></vue-editor>
                </div>
              </div>
              <!-- lancamento sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Informações</h4>
                <hr>

                <div class="form-group">
                  <label>Categoria</label>
                  <select class="form-control" id="perfil"
                          v-model="lancamento.category">
                    <option :value="''">Selecione</option>
                    <option v-for="(item, index) in input_options"
                            :key="index">{{ item }}

                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Mês</label>
                  <select class="form-control" id="month"
                          v-model="lancamento.month">
                    <option :value="''">Selecione</option>
                    <option v-for="(item, index) in month_options"
                            :key="index">{{ item }}

                    </option>
                  </select>
                </div>


                <!--                                <div class="form-group">-->
                <!--                                    <label>Categoria</label>-->
                <!--                                    <input type="text" v-model="lancamento.category" class="form-control">-->
                <!--                                </div>-->

                <div class="form-group">
                  <label>Valor</label>
                  <currency-input class="form-control" v-model="lancamento.price" :options="{ currency: 'BRL'}"/>

                </div>

                <div class="form-group">
                  <div class='tag-input'>
                    <div v-for='(tag, index) in lancamento.tags' :key='tag' class='tag-input__tag'>
                      <span @click='removeTag(index)'>x</span>
                      {{ tag }}
                    </div>
                    <input
                        type='text'
                        class='tag-input__text'
                        placeholder="Tags"
                        @keydown.enter='addTag'
                        @keydown.188='addTag'
                        title="Insira palavras para ajudar a encontrar os dados no futuro"
                    /></div>


                  <!--                      <input type="text" @keyup.188="addTag" @keydown.enter='addTag' placeholder="tag" v-model="tag" class="form-control">-->

                  <!--                      <div  class="d-flex">-->
                  <!--                        <p v-for="tag in lancamento.tags">-->
                  <!--                            <span class="p-1">{{tag}}</span>-->
                  <!--                        </p>-->

                  <!--                      </div>-->
                </div>


                <!--                    <div class="form-group">-->
                <!--                      <label>lancamento Images</label>-->
                <!--                      <input type="file" @change="uploadImage" class="form-control">-->
                <!--                    </div>-->

                <div class="form-group d-flex">
                  <div class="p-1" v-for="(image, index) in lancamento.images">
                    <div class="img-wrapp">
                      <img :src="image" alt="" width="80px">
                      <span class="delete-img" @click="deleteImage(image,index)">X</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
            <button @click="addlancamento()" type="button" class="btn btn-primary" v-if="modal == 'new'">
              Adicionar
            </button>
            <button @click="updatelancamento()" type="button" class="btn btn-primary"
                    v-if="modal == 'edit'">Adicionar alterações
            </button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import {VueEditor} from "vue2-editor";
import {fb, db} from '../firebase';
import CurrencyInput from '../components/CurrencyInput';

export default {
  name: "lancamentos",
  components: {
    VueEditor,
    CurrencyInput
  },
  props: {
    msg: String
  },

  data() {
    return {
      input_options: [
        'Dízimo',
        'Oferta de Culto',
        'Oferta Especial',
        'Companhas',
        'Outros'
      ],
      month_options: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ],
      lancamentos: [],
      lancamento: {
        name: null,
        description: null,
        price: null,
        tags: ['Dizimo', 'Ofertas'],
        images: [],
        type_input: '',
        dt_create: null,
        categoria: null,
      },
      activeItem: null,
      modal: null,
      tag: null
    }
  },

  firestore() {
    return {
      lancamentos: db.collection('lancamentos'),
    }
  },
  methods: {

    formatDate(date) {
      return moment(date).format("Do MMM YYYY")
    },

    deleteImage(img, index) {

      let image = fb.storage().refFromURL(img);

      this.lancamento.images.splice(index, 1);

      image.delete().then(function () {
        console.log('image deleted');
      }).catch(function (error) {
        // Uh-oh, an error occurred!
        console.log('an error occurred');
      });

    },
    removeTag(index) {
      this.lancamento.tags.splice(index, 1)
    },
    addTag(event) {
      event.preventDefault()
      var val = event.target.value.trim()
      if (val.length > 0) {
        this.lancamento.tags.push(val)
        event.target.value = ''
      }
    },
    // addTag(){
    //   alert()
    //    this.lancamento.tags.push(this.tag);
    //    this.tag = "";
    // },
    uploadImage(e) {

      if (e.target.files[0]) {

        let file = e.target.files[0];

        var storageRef = fb.storage().ref('lancamentos/' + Math.random() + '_' + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on('state_changed', (snapshot) => {

        }, (error) => {
          // Handle unsuccessful uploads
        }, () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...

          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.lancamento.images.push(downloadURL);
          });
        });
      }
    },

    reset() {
      this.lancamento = {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: [],
        type_input: '',
        dt_create: null,
        categoria: null,
      }
    },

    addNew(type_input) {
      this.modal = 'new';
      this.reset();
      this.lancamento.type_input = type_input;
      $('#lancamento').modal('show');
    },
    updatelancamento() {
      this.$firestore.lancamentos.doc(this.lancamento.id).update(this.lancamento);
      Toast.fire({
        type: 'success',
        title: 'Updated  successfully'
      })

      $('#lancamento').modal('hide');
    },

    editlancamento(lancamento) {
      this.modal = 'edit';
      this.lancamento = lancamento;
      $('#lancamento').modal('show');
    },


    deletelancamento(doc) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {

          this.$firestore.lancamentos.doc(doc['.key']).delete()

          Toast.fire({
            type: 'success',
            title: 'Deleted  successfully'
          })


        }
      })


    },
    addlancamento() {

      this.lancamento.dt_create = new Date().toString();

      this.$firestore.lancamentos.add(this.lancamento);

      Toast.fire({
        type: 'success',
        title: 'Lançamento feito com sucesso!'
      })

      $('#lancamento').modal('hide');
    }


  },
  created() {


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

.tag-input {
  width: 100%;
  border: 1px solid #eee;
  font-size: 0.9em;
  height: 50px;
  box-sizing: border-box;
  padding: 0 10px;
}

.tag-input__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input__text {
  border: none;
  outline: none;
  font-size: 0.9em;
  line-height: 50px;
  background: none;
}
</style>
