<template>
    <div>
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                   role="tab" aria-controls="nav-home" aria-selected="true">Pesssoal e contato</a>
                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                   role="tab" aria-controls="nav-profile" aria-selected="false">Outros dados</a>
                <a class="nav-item nav-link" id="nav-config-tab" data-toggle="tab" href="#account" role="tab"
                   aria-controls="account" aria-selected="false">Configurações</a>
                <a v-show="perfil === 'admin'" class="nav-item nav-link" id="nav-credential-tab" data-toggle="tab"
                   href="#credential" role="tab"
                   aria-controls="account" aria-selected="false">Carteirinha</a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                 aria-labelledby="nav-home-tab">
                <br>
                <div class="container">
                    <div class="row">

                        <div class="col-md-2 text-white"
                             :style="{ backgroundImage: `url(${user.credencial ? user.credencial.backgroundUrl+'.jpg' : backgroundUrl+theme+'.jpg'})` }">
                            <div class="col-md-12 text-center">
                                <div class="picture-container">
                                    <br>
                                    <div class="picture">

                                        <img :src="user.photoURL" alt="" width="80px" class="picture-src"
                                             id="wizardPicturePreview" title="">
                                        <input type="file" id="photo" class="" @change="uploadImage">
                                    </div>
                                </div>
                                <br>
                                <span class="delete-img text-center"
                                      @click="deleteImage(user.photoURL)"><i class="fa fa-trash"></i></span>
                            </div>

                            <div class="col-md-12" v-if="perfil === 'admin'">
                                <div class="form-group">
                                    <small>Perfil</small>
                                    <select class="form-control" id="perfil"
                                            v-model="user.perfil">
                                        <option :value="''">Selecione</option>
                                        <option v-for="(item, index) in perfil_options"
                                                :key="index">{{item}}

                                        </option>
                                    </select>
                                </div>
                                <div class="text-center">
                                    <br>
                                    <div v-if="assinado()"><img class="" style="width: 150px;"
                                                                src="/img/cards/assinatura.png"
                                                                alt="Assign"></div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-10">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label><b>Cargo Ministerial*</b></label>
                                        <select class="form-control" id="cargo"
                                                v-model="user.cargo_ministerial">
                                            <option :value="''">Selecione</option>
                                            <option v-for="(item, index) in cargo_options"
                                                    :key="index">{{item}}

                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label><b>Grupo</b></label>
                                        <select class="form-control" id="grupo"
                                                v-model="user.grupo">
                                            <option :value="'' || undefined">Selecione</option>
                                            <option v-for="(item, index) in grupo_options"
                                                    :key="index" :value="item">{{item}}

                                            </option>
                                        </select>
<!--                                        <select class="form-control" id="exampleFormControlSelect1"-->
<!--                                                v-model="user.estado_civil">-->
<!--                                            <option :value="''">Selecione</option>-->
<!--                                            <option v-for="(selectOpt, index) in grupo_options"-->
<!--                                                    :key="index" :value="selectOpt">{{selectOpt}}-->
<!--                                            </option>-->
<!--                                        </select>-->
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label>Nome</label>
                                        <input type="text" v-model="user.name"
                                               class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>CPF</label>
                                        <input type="text" v-mask="'###.###.###-##'" v-model="user.cpf"
                                               class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label>Aniversário</label>
                                        <input type="text" v-mask="'##/##/####'" v-model="user.dt_birth"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="sexo">Sexo</label>
                                        <select class="form-control" id="sexo"
                                                v-model="user.sexo">
                                            <option value="">Selecione</option>
                                            <option>Masculino</option>
                                            <option>Feminino</option>

                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Estado Civil</label>
                                        <select class="form-control" id="exampleFormControlSelect1"
                                                v-model="user.estado_civil">
                                            <option :value="''">Selecione</option>
                                            <option v-for="(selectOpt, index) in estado_civil_options"
                                                    :key="index" :value="selectOpt">{{selectOpt}}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label>Telefone 1</label>
                                        <input type="text" v-mask="'(##)#####-####'" v-model="user.telefone1"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label>Telefone 2</label>
                                        <input type="text" v-mask="'(##)#####-####'" v-model="user.telefone2"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label>E-mail</label>
                                        <input type="text" v-model="user.email"
                                               class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label>CEP<span v-show="loading"> buscando CEP</span></label>
                                        <input type="text" v-mask="'#####-###'" v-model="user.cep"
                                               @keyup="searchCep(user.cep)"

                                               class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label>Logradouro</label>
                                        <input type="text" v-model="user.logradouro"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label>Complemento</label>
                                        <input type="text" v-model="user.complemento"
                                               class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label>Número</label>
                                        <input type="number" v-model="user.numero"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label>Bairro</label>
                                        <input type="text" v-model="user.bairro"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label>UF</label>
                                        <select class="form-control" id="uf"
                                                v-model="user.uf">
                                            <option :value="''">Selecione</option>
                                            <option v-for="(selectOpt, index) in estados"
                                                    :key="index" :value="selectOpt">{{selectOpt.nome}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Cidade</label>
                                        <select class="form-control" id="cidade" v-if="user.uf"
                                                v-model="user.cidade">
                                            <option :value="''">Selecione</option>
                                            <option v-for="(selectOpt, index) in municipios"
                                                    v-if="selectOpt.estado == user.uf.id"
                                                    :key="index" :value="selectOpt">{{selectOpt.nome}}

                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--<div class="form-group">-->
                    <!--<vue-editor v-model="user.description"></vue-editor>-->
                    <!--</div>-->
                </div>

            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <br>
                <div class="container">
                    <div class="row">

                        <div class="col-md-4">
                            <div class="form-group">
                                <label>RG e Orgão Expeditor</label>
                                <input type="text" v-model="user.rg"
                                       class="form-control">
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Pai</label>
                                <input type="text" v-model="user.nm_pai"
                                       class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Mãe</label>
                                <input type="text" v-model="user.nm_mae"
                                       class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Profissão</label>
                                <input type="text" v-model="user.profissao"
                                       class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Naturalidade</label>
                                <input type="text" v-model="user.naturalidade"
                                       class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Nacionalidade</label>
                                <input type="text" v-model="user.nacionalidade"
                                       class="form-control">
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Escolaridade</label>
                                <select class="form-control" id="escolaridade"
                                        v-model="user.escolaridade">
                                    <option :value="''">Selecione</option>
                                    <option v-for="(item, index) in escolaridade_options"
                                            :key="index">{{item}}

                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Data Entrada</label>
                                <input type="text" v-mask="'##/##/####'" v-model="user.data_admissao"
                                       class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Data do Batismo</label>
                                <input type="text" v-mask="'##/##/####'" v-model="user.data_batismo"
                                       class="form-control">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Modo de admissão</label>
                                <select class="form-control" id="modo_admissao"
                                        v-model="user.modo_admissao">
                                    <option :value="''">Selecione</option>
                                    <option v-for="(item, index) in admissao_options"
                                            :key="index">{{item}}

                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab">
                <br>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="alert alert-info">
                                Por favor, use o botão Redefinir senha por e-mail para redefinir a senha.
                            </div>
                        </div>

                        <!--                        <div class="col-md-6">-->
                        <!--                            <div class="form-group">-->
                        <!--                                <input type="password" v-model="userProfile.password" placeholder="Nova senha"-->
                        <!--                                       class="form-control">-->
                        <!--                            </div>-->
                        <!--                        </div>-->

                        <div class="col-md-12">
                            <div class="form-group align-right">
                                <input type="button" @click="resetPassword" value="Redifinir senhar por e-mail"
                                       class="btn btn-success">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="credential" role="tabpanel" aria-labelledby="account-tab">
                <div class="space-xs"></div>
                <Card v-if="user.uid" :info="user"></Card>
            </div>
        </div>
        <div class="modal-footer">
            <button v-if="!assinado() && solicitado() && perfil === 'admin'" @click="updateUser('assinar')"
                    type="button"
                    class="btn btn-info">Assinar
                carteirinha <i class="fa fa-id-card"></i></button>
            <button type="button" class="btn btn-secondary" v-if="currentRouter != 'profile'" data-dismiss="modal">
                Fechar
            </button>
            <button @click="addUser()" type="button" class="btn btn-primary" v-if="modal == 'new'">Salvar
            </button>
            <button @click="updateUser()" type="button" class="btn btn-primary" v-if="modal != 'new'">
                Atualizar
            </button>
        </div>
        <div class="modal fade" id="update-password" tabindex="-1" role="dialog" aria-labelledby="editLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-xs" role="document">
                <div class="modal-content">

                    <div class="modal-header border-bottom-0">
                        <h5 class="modal-title" id="editLabel">Para atualizar as informações por favor insira sua
                            senha</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="password" v-model="userProfile.password" placeholder=""
                                   class="form-control">
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group align-right">
                            <input type="button" @click="updateUser" value="Efetivar todas as alterações"
                                   class="btn btn-success">
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import {fb, db} from '../firebase';

    import profile from '../services/globalProfile'
    import Card from "./Card";

    export default {
        name: "FormDataUser",
        components: {Card},
        props: {
            user: Object,
            modal: String
        },
        data() {
            return {
                userProfile: {
                    password: '',
                    confirmPassword: ''
                },
                userData: this.user,
                perfil: '',
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
                    'Diaconisa',
                    'Auxiliar',
                    'Membro',
                    'Congregado(a)',
                    'Missionária',
                    'Musicista',
                ],
                grupo_options: [
                    'Jovens',
                    'Mulheres',
                    'Varões',
                    'Crianças',
                    'Oração',
                    'Louvor',
                ],
                perfil_options: [
                    'root',
                    'admin',
                    'secretaria',
                    'tesouraria',
                    'membro',
                    'usuario'
                ],
                admissao_options: [
                    'Batismo',
                    'Conversão',
                    'Congregado',
                    'Transferência de outra igreja',
                    'Outros'
                ],
                estados: '',
                municipios: '',
                activeItem: null,
                tag: null,
                backgroundUrl: '',
                theme: '',
                loading: false,
                currentRouter: ''
            }
        },
        created() {

            let user = fb.auth().currentUser
            this.getMunicipios()
            this.getEstados()

            db.collection('users').doc(user.uid).onSnapshot(response => {
                let values = response.data()
                this.perfil = values.perfil
                this.name = values.name
                this.email = values.email
                this.photoURL = values.photoURL
            })
            this.currentRouter = this.$route.name
        },
        methods: {
            resetPassword() {
                const auth = fb.auth();

                auth.sendPasswordResetEmail(auth.currentUser.email).then(() => {
                    Toast.fire({
                        type: 'success',
                        title: 'Email sent'
                    })
                }).catch((error) => {
                    console.log(error);
                });
            },
            assinado() {
                return this.user.credencial ? (this.user.credencial.solicitado && this.user.credencial.assinado) : false
            },
            solicitado() {
                return this.user.credencial ? this.user.credencial.solicitado : false
            },
            deleteImage(img) {

                let image = fb.storage().refFromURL(img);

                this.user.photoURL = '/img/user.png';

                image.delete().then(function () {
                    console.log('image deleted');
                }).catch(function (error) {
                    // Uh-oh, an error occurred!
                    console.log('an error occurred');
                });

            },

            addTag() {
                this.user.tags.push(this.tag);
                this.tag = "";
            },
            uploadImage(e) {

                if (e.target.files[0]) {

                    let file = e.target.files[0];

                    var storageRef = fb.storage().ref('users/' + Math.random() + '_' + file.name);

                    let uploadTask = storageRef.put(file);

                    uploadTask.on('state_changed', (snapshot) => {

                    }, (error) => {
                        // Handle unsuccessful uploads
                    }, () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                            let currentUser = fb.auth().currentUser;
                            currentUser.updateProfile(
                                {
                                    photoURL: downloadURL
                                }
                            )
                            this.user.photoURL = downloadURL;
                        });

                    });
                }


            },

            reset() {
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
                    grupo: '',
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
                    photoURL: '/img/user.png',
                    status: true,
                    churchId: 1,
                    uid: '',
                    credencial: {
                        assinado: 0,
                        backugroundUrl: '',
                        dt_emissão: '',
                        name: '',
                        numero: '',
                        solicitado: '',
                        uid: '',
                        validade: ''
                    }
                }
            },

            addNew() {
                this.modal = 'new';
                this.reset();
                $('#product').modal('show');
            },
            async updateUser(action) {
                let currentUser = fb.auth().currentUser;
                let idUser = ''
                if (this.currentRouter === 'profile') {
                    idUser = currentUser.uid
                } else {
                    idUser = this.user.uid
                }
                if (action === 'assinar') {
                    this.user.credencial.assinado = 1;
                }

                if (currentUser.email != this.user.email) {
                    if (this.userProfile.password) {
                        let responseChangePassword = await fb.auth().signInWithEmailAndPassword(currentUser.email, this.userProfile.password);
                    }

                    let changeEmail = await currentUser.updateEmail(this.user.email).then(() => {
                        return 1
                    }).catch(function (error) {
                        console.log(error)
                        return error
                    });
                    if ('auth/requires-recent-login' == changeEmail.code) {
                        $('#update-password').modal('show');
                        return
                    }
                }
                let profileData = {
                    displayName: this.user.name,
                    photoURL: this.user.photoURL ? this.user.photoURL : '/img/user.png'
                }

                currentUser.updateProfile(profileData)

                this.user.name = this.user.name.trim()

                db.collection('users').doc(idUser).update(this.user).then(function () {
                    Toast.fire({
                        type: 'success',
                        title: 'Atualizado com sucesso!'
                    })
                })

                $('#product').modal('hide');
                $('#update-password').modal('hide');
            },
            getMunicipios() {
                this.$http.get('/municipios.json').then(response => {
                    this.municipios = response.body
                }, response => {
                    console.log('Erro ao buscar estados')
                })
            },
            getEstados() {
                this.$http.get('/estados.json').then(response => {
                    this.estados = response.body
                }, response => {
                    console.log('Erro ao buscar estados')
                })
            },
            searchCep: function (cep) {
                let newValu = cep.replace(/[^A-Z0-9]/gi, '')
                if (newValu.length === 8) {
                    this.loading = true
                    this.$http
                        .get(`https://viacep.com.br/ws/${newValu}/json/`)
                        .then(function (response) {
                            this.user.logradouro = response.body.logradouro
                            this.user.numero = response.body.numero
                            this.user.complemento = response.body.complemento
                            this.user.cep = response.body.cep
                            this.user.bairro = response.body.bairro
                            this.user.ibge = response.body.ibge
                            this.loading = false
                        })
                        .catch(error => console.log(error))
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
