<template>
    <div class="login">
        <!-- Modal -->
        <div class="modal fade" id="start" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">

                    <div class="modal-body">

                        <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#login-form"
                                   role="tab" aria-controls="pills-login" aria-selected="true">Logar</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#register-form"
                                   role="tab" aria-controls="pills-register" aria-selected="false">Cadastrar</a>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                            <!-- Login -->
                            <form class="tab-pane fade show active" data-vv-scope="form-login" id="login-form"
                                  role="tabpanel" @submit.prevent="logar"
                                  aria-labelledby="login-tab">

                                <div class="form-group">
                                    <label for="login_email">Email</label>
                                    <input name="E-mail" type="email" v-validate="'required|email'"
                                           v-model="login.email" class="form-control" id="login_email"
                                           aria-describedby="emailHelp" placeholder="Informe seu email">
                                    <span>{{ errors.first('form-login.E-mail') }}</span>
                                </div>

                                <div class="form-group">
                                    <label for="login_password">Senha</label>
                                    <input name="Senha" type="password" v-validate="'required'" @keyup.enter="logar"
                                           v-model="keypass.login" class="form-control"
                                           id="login_password" placeholder="Informe sua senha">
                                    <span>{{ errors.first('form-login.Senha') }}</span>
                                </div>

                                <a id="pills-recover-tab" href="#" @click="recover">Recuperar senha</a>
                                <div class="form-group align-right">
                                    <vue-recaptcha sitekey="6LeKhL4UAAAAAEViQydmlMliEqNP7gLqBQ_z5luU">
                                        <button type="submit" class="btn btn-primary" @click="logar">Logar</button>
                                    </vue-recaptcha>
                                </div>

                                <!-- Recuperar senha -->
                                <div v-show="showRec" class="tab-pane" id="recover-form" @submit.prevent="recover">
                                    <div class="form-group">
                                        <input name="email" type="email" v-validate="'required|email'"
                                               v-model="login.email"
                                               class="form-control" id="email-recover"
                                               aria-describedby="emailHelp"
                                               placeholder="Informe seu e-mail para recuperar a senha">
                                        <span>{{ errors.first('form-recover.email') }}</span>
                                    </div>

                                    <div class="form-group align-right">
                                        <button type="submit" class="btn btn-primary">Enviar</button>
                                    </div>
                                </div>

                            </form>
                            <!--                            <div class="space-xs"></div>-->
                            <!--                            <div class="text-center">-->
                            <!--                                <button class="loginBtn loginBtn&#45;&#45;facebook" @click="socialAutenticate('facebook')">-->
                            <!--                                    Entrar com o Facebook-->
                            <!--                                </button>-->

                            <!--                                <button class="loginBtn loginBtn&#45;&#45;google" @click="socialAutenticate('google')">-->
                            <!--                                    Entrar com o Google-->
                            <!--                                </button>-->
                            <!--                            </div>-->
                            <!--                            <br>-->
                            <!-- Cadastro -->
                            <form class="tab-pane fade" data-vv-scope="form-register" id="register-form" role="tabpanel"
                                  @submit.prevent="register"
                                  aria-labelledby="register-tab">
                                <div class="form-group">
                                    <label for="name">Nome*</label>
                                    <input name="name" type="text" v-validate="'required|min:2'" v-model="user.name"
                                           class="form-control" id="name"
                                           placeholder="Informe seu nome">
                                    <span>{{ errors.first('form-register.name') }}</span>

                                </div>

                                <div class="form-group">
                                    <label for="email">Email*</label>
                                    <input name="email" type="email" v-validate="'required|email'" v-model="user.email"
                                           class="form-control" id="email"
                                           aria-describedby="emailHelp" placeholder="Informe seu e-mail">
                                    <span>{{ errors.first('form-register.email') }}</span>
                                </div>

                                <div class="form-group">
                                    <label for="telefone1">Celular*</label>
                                    <input name="telefone1" type="tel" v-validate="'required'" v-mask="'(##)#####-####'"
                                           v-model="user.telefone1"
                                           class="form-control" id="telefone1"
                                           aria-describedby="telefone1Help" placeholder="Informe o seu telefone">
                                    <span>{{ errors.first('form-register.telefone1') }}</span>
                                </div>

                                <!--                                <div class="form-group">-->
                                <!--                                    <label for="cpf">CPF*</label>-->
                                <!--                                    <input name="cpf" type="text" v-model="user.cpf"-->
                                <!--                                           v-mask="'###.###.###-##'" class="form-control" id="cpf"-->
                                <!--                                           aria-describedby="emailHelp" placeholder="Informe seu CPF">-->
                                <!--                                    <span>{{ errors.first('form-register.cpf') }}</span>-->

                                <!--                                </div>-->

                                <div class="form-group">
                                    <label for="password">Senha*</label>
                                    <input name="password" type="password" v-validate="'required'"
                                           v-model="keypass.register" class="form-control" id="password"
                                           placeholder="Insira uma senha">
                                    <span>{{ errors.first('form-register.password') }}</span>

                                </div>
                                <div class="form-group align-right">
                                    <button type="submit" class="btn btn-primary">Enviar</button>
                                </div>

                            </form>
                            <!--                            <a href="@/download/politica_de_priv~acidade.pdf" target="_blank">Download</a>-->
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // https://sislife-35bde.firebaseapp.com/__/auth/handler
    import {fb, db} from '../firebase'
    import VueRecaptcha from 'vue-recaptcha'
    import firebase from 'firebase'
    import utilService from '../services/utilService'

    export default {
        name: "Login",
        props: {
            msg: String
        },
        components: {VueRecaptcha},
        data() {
            return {
                showRec: false,
                login: {
                    name: null,
                    perfil: null,
                    email: null,
                    cpf: null
                },
                keypass: {
                    login: '',
                    register: ''
                },
                user: {
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
                    telefone2: '',
                    email: '',
                    obs: '',
                    tags: [],
                    photoURL: '/img/user.png',
                    status: true,
                    churchId: 1,
                    uid: '',
                    dt_create: '',
                    dt_update: '',
                    dt_delete: '',
                    credencial: {
                        assinado: 0,
                        backugroundUrl: '',
                        dt_emissao: '',
                        name: '',
                        numero: '',
                        solicitado: 0,
                        uid: '',
                        validade: ''
                    }
                },
                msgRecover: ''
            }
        },
        methods: {
            async logar() {
                const isValid = await this.$validator.validateAll('form-login')
                if (isValid) {
                    fb.auth().signInWithEmailAndPassword(this.login.email, this.keypass.login)
                        .then(() => {
                            $('#start').modal('hide')
                            this.$router.replace('/admin/overview');
                        })
                        .catch(function (error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if (errorCode === 'auth/wrong-password') {
                                Toast.fire({
                                    type: 'warning',
                                    title: 'Usuário ou senha incorreto!'
                                })
                            } else {
                                Toast.fire({
                                    type: 'warning',
                                    title: 'Muitas tentativas erradas, espere alguns minutos e tente novamente ou tente recuperar sua senha'
                                })
                            }
                            console.log(error);
                        });
                }

            },
            socialAutenticate(providerType) {
                let provider = '';

                switch (providerType) {
                    case 'google':
                        provider = new firebase.auth.GoogleAuthProvider();
                        provider.addScope('profile');
                        provider.addScope('email');
                        break;
                    case 'facebook':
                        provider = new firebase.auth.FacebookAuthProvider();
                        break;
                    default:
                        alert('Erro ao fazer login pela rede social');
                }

                firebase.auth().signInWithPopup(provider).then((responseAuth) => {
                    console.log(responseAuth)
                    let check = responseAuth.additionalUserInfo.isNewUser
                    console.log(check)
                    if (check) {
                        this.user.perfil = 'membro'
                        this.user.uid = responseAuth.user.uid
                        this.user.churchId = 1
                        this.user.name = responseAuth.user.displayName
                        this.user.email = responseAuth.user.email

                        db.collection("users").doc(this.user.uid).set(this.user)
                            .then(function () {
                                console.log("Document successfully written!");
                            })
                            .catch(function (error) {
                                console.error("Error writing document: ", error);
                            });
                        $('#start').modal('hide')
                        this.user = ''
                        this.$router.replace('/admin/overview');
                    } else {
                        $('#start').modal('hide')
                        this.user = ''
                        this.$router.replace('/admin/overview');
                    }

                })
                    .catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode == 'auth/weak-password') {
                            Toast.fire({
                                type: 'warning',
                                title: 'A senha é fraca!'
                            })
                            $('#start').modal('hide')
                        }
                        if (errorCode == 'auth/email-already-in-use') {
                            Toast.fire({
                                type: 'warning',
                                title: 'E-mail já cadastrado!'
                            })
                            $('#start').modal('hide')
                        }
                        if (errorCode == 'auth/account-exists-with-different-credential') {
                            Toast.fire({
                                type: 'warning',
                                title: 'E-mail já cadastrado em outro tipo de login!'
                            })
                            $('#start').modal('hide')
                        }

                    });
                //this.$router.replace('home');
            },
            async register(responseAuth) {
                const isValid = await this.$validator.validateAll('form-register')

                if (isValid) {
                    fb.auth().createUserWithEmailAndPassword(this.user.email, this.keypass.register)
                        .then((user) => {

                            this.user.perfil = 'membro'
                            this.user.uid = user.user.uid
                            this.user.churchId = 1
                            this.user.name = this.user.name.trim()
                            this.user.dt_create = new Date()

                            db.collection("users").doc(user.user.uid).set(this.user)
                                .then(function () {
                                    console.log("Document successfully written!");
                                })
                                .catch(function (error) {
                                    console.error("Error writing document: ", error);
                                });
                            $('#start').modal('hide')
                            this.user = ''
                            this.$router.replace('/admin/overview');

                        })
                        .catch(function (error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if (errorCode == 'auth/weak-password') {
                                Toast.fire({
                                    type: 'warning',
                                    title: 'A senha é fraca!'
                                })
                            }
                            if (errorCode == 'auth/email-already-in-use') {
                                Toast.fire({
                                    type: 'warning',
                                    title: 'E-mail já cadastrado!'
                                })
                            }

                        });
                }
            },
            async recover() {
                const isValid = await this.$validator.validateAll('form-recover')
                if (!this.login.email) {
                    this.showRec = true
                }
                if (isValid) {
                    const request = await fb.auth().sendPasswordResetEmail(this.login.email).then(function () {
                        Toast.fire({
                            type: 'success',
                            title: 'Enviado com sucesso!'
                        })
                        return true
                    }).catch(function (error) {
                        Toast.fire({
                            type: 'warning',
                            title: error.message
                        })
                    })
                    if (request) {
                        this.msgRecover = 'Em breve você receberá informaçães de recuperação de senha no seu e-mail'
                    }
                }
            }

        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
