<template>
    <div>
        <div class="overview">
            <div class="container h-100">
                <button class="btn btn-primary no-print" @click="print = !print">Modo impressão</button>

                <div v-if="!print" class="intro h-100">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-md-5">
                            <h6>Credencial Ministério VIDA</h6>
                            <div class="container-card">
                                <div class="credit-card selected"
                                     :style="{ backgroundImage: `url(${solicitado() ? user.credencial.backgroundUrl+'.jpg' : backgroundUrl+theme+'.jpg'})` }">
                                    <img class="card-image" src="/img/logo-vida.png" alt="User picture">
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <!--<div class="card-expire"><span class="card-text">CVC</span> 321 <span-->
                                    <!--class="card-text">Válido até</span> 12/24-->
                                    <!--</div>-->
                                    <div class="card-holder text-center">{{credencial.name ? credencial.name :
                                        abrevia(user.name, true)}}
                                    </div>
                                    <b class="card-holder upper-case" title="Atualize suas informações no seu perfil">{{user.cargo_ministerial
                                        || 'Cargo não informado'
                                        }}</b>
                                    <div class="small-space-xs"></div>
                                    <small class="text-white valid-style-text d-flex justify-content-around">
                                        <div class="align-left text-center">CPF {{user.cpf ? user.cpf : 'Não
                                            Informado'}}
                                        </div>
                                        <div class="align-right text-center"> VALID DATES {{solicitado() ?
                                            formatValidDate(user.credencial.validade) : formatValidDate(getDate())}}
                                        </div>
                                    </small>
                                </div>
                            </div>
                            <div class="space-xs">
                                <small>Válida somente com a assinatura do pastor presidente</small>
                            </div>
                            <div class="container-card">
                                <div class="credit-card selected"
                                     :style="{ backgroundImage: `url(${solicitado() ? user.credencial.backgroundUrl+'.jpg' : backgroundUrl+theme+'.jpg'})` }">
                                    <div class="text-center text-white">
                                        <div class="space-xs"></div>
                                        <div class="">ASSEMBLÉIA DE DEUS</div>
                                    </div>
                                    <div class="text-center text-white">
                                        <div class="0">MINISTÉRIO VIDA</div>
                                    </div>
                                    <div class="card-number">
                                        <div class="digit-group upper-case">000{{user.churchId}} {{solicitado() ?
                                            user.credencial.emissao : getDate('current')}}
                                            {{solicitado() ? formatValidDateNumber(user.credencial.validade) : formatValidDateNumber(getDate())}}
                                            {{getCodeCredential()}}
                                        </div>
                                    </div>
                                    <img v-if="assinado()"
                                         class="card-assign" src="/img/cards/assinatura.png" alt="Assign">
                                    <div class="text-center text-white"><br>

                                        <small>Clevesson Bispo de Oliveira</small>

                                        <small><br>
                                            <small class="up-top-7">Pastor Presidente</small>
                                        </small>

                                    </div>
                                    <div class="text-white text-center">
                                        <div class="up-top-7">www.vempravida.com.br</div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-xs">
                                <small v-if="assinado()">
                                    autorização: {{user.credencial.uid}}
                                </small>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div v-if="!solicitado()">
                                Sugestão de nomes para carteirinha:<br>
                                <div class="col-md-6">
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input"
                                                   :value="abrevia(user.name, true)"
                                                   v-model="credencial.name" name="optradio">{{abrevia(user.name,
                                            true)}}
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" :value="abrevia(user.name)"
                                                   v-model="credencial.name" name="optradio">{{abrevia(user.name)}}
                                        </label>
                                    </div>

                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="text" class="form-control"
                                                   placeholder="Ou escreva do seu jeito"
                                                   :maxlength="24" v-model="credencial.name"/>
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                      v-text="(max - credencial.name.length)"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="button" class="btn btn-primary" @click="mudarTema">
                                        Mudar tema <span class="badge badge-light">{{theme}}</span>
                                    </button>
                                    <br><br>
                                    <button type="submit" class="btn btn-primary" v-if="user.cargo_ministerial != '' "
                                            @click="createCrendential">Solicitar
                                        assinatura do pastor
                                    </button>
                                    <div class="alert-warning" v-if="user.cargo_ministerial === ''">Para solicitar sua
                                        credencial por favor acesse o menu <b>Meus dados</b> e selecione o seu Cargo
                                        Ministerial
                                    </div>
                                </div>
                            </div>

                            <div v-if="assinado()"
                                 class="text-center">
                                <a href="https://wa.me/556183661622" class="btn btn-info text-white" target="_blank">Quero
                                    minha credencial impressa</a>
                            </div>

                            <div v-if="aguardandoAssinatura()"
                                 class="text-center">
                                <div class="alert-info">Aguardando
                                    assinatura do pastor
                                </div>
                                <br><br>
                            </div>

                            <div class="text-center" v-if="solicitado()">
                                <div class="space-xs"></div>
                                <a class="btn btn-outline-success my-2 my-sm-0" href="#" data-toggle="modal"
                                   data-target="#confirm">Alterar
                                    / Renovar</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div v-if="print" class="intro h-100">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-md-5">
                            <div class="container-card">
                                <div class="credit-card selected print-mode"
                                     :style="{ backgroundImage: `url(${solicitado() ? user.credencial.backgroundUrl+'.jpg' : backgroundUrl+theme+'.jpg'})` }">
<!--                                    <img class="card-image" src="/img/logo-vida.png" alt="User picture">-->
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <!--<div class="card-expire"><span class="card-text">CVC</span> 321 <span-->
                                    <!--class="card-text">Válido até</span> 12/24-->
                                    <!--</div>-->
                                    <div class="card-holder text-center">{{credencial.name ? credencial.name :
                                        abrevia(user.name, true)}}
                                    </div>
                                    <b class="card-holder upper-case" title="Atualize suas informações no seu perfil">{{user.cargo_ministerial
                                        || 'Cargo não informado'
                                        }}</b>
                                    <div class="small-space-xs"></div>
                                    <small class="text-white valid-style-text d-flex justify-content-around">
                                        <div class="align-left text-center">CPF {{user.cpf ? user.cpf : 'Não
                                            Informado'}}
                                        </div>
                                        <div class="align-right text-center"> VALID DATES {{solicitado() ?
                                            formatValidDate(user.credencial.validade) : formatValidDate(getDate())}}
                                        </div>
                                    </small>
                                </div>
                            </div>
                           <div class="small-space-xs"></div>
                            <div class="container-card">
                                <div class="credit-card selected print-mode"
                                     :style="{ backgroundImage: `url(${solicitado() ? user.credencial.backgroundUrl+'.jpg' : backgroundUrl+theme+'.jpg'})` }">
                                    <div class="text-center text-white">
                                        <div class="space-xs"></div>
                                        <div class="">ASSEMBLÉIA DE DEUS</div>
                                    </div>
                                    <div class="text-center text-white">
                                        <div class="0">MINISTÉRIO VIDA</div>
                                    </div>
                                    <div class="card-number">
                                        <div class="digit-group upper-case">000{{user.churchId}} {{solicitado() ?
                                            user.credencial.emissao : getDate('current')}}

                                            {{solicitado() ? formatValidDateNumber(user.credencial.validade) : formatValidDateNumber(getDate())}}

                                            {{getCodeCredential()}}
                                        </div>
                                    </div>
                                    <img v-if="assinado()"
                                         class="card-assign" src="/img/cards/assinatura.png" alt="Assign">
                                    <div class="text-center text-white"><br>

                                        <small>Clevesson Bispo de Oliveira</small>

                                        <small><br>
                                            <small class="up-top-7">Pastor Presidente</small>
                                        </small>

                                    </div>
                                    <div class="text-white text-center">
                                        <div class="up-top-7">www.vempravida.com.br</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
        </div>


        <!-- Modal -->
        <div class="modal fade" id="confirm" tabindex="-1" role="dialog" aria-labelledby="loginTitle"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">

                    <div class="modal-body">
                        <h5>Atenção!</h5>
                        <p>Ao confirmar o sistema removera sua credencial atual e você deverá pedir uma nova credencial
                            atualizada</p>
                        <a href="#" class="btn btn-warning text-white" @click="renovarAlterar()">Confirmar</a>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {VueEditor} from "vue2-editor";
import {fb, db} from '../firebase';
import FormDataUser from "../components/FormDataUser";
import fbs from "../services/fireService";

export default {
  name: "Card",
  props: {
    info: Object
  },
  components: {
    FormDataUser,
    VueEditor
  },
  data: () => ({
    user: '',
    print: false,
    max: 24,
    credencial: {
      name: '',
      emissao: '',
      validade: '',
      numero: '',
      assinado: 0,
      solicitado: 0,
      backgroundUrl: '',
      dt_emissao: '',
      uid: ''
    },
    backgroundUrl: '/img/cards/',
    backgroundUrlVerso: '/img/cards/verso/1.svg',
    theme: 1,
  }),
  created: function () {
    this.getUser()
  },
  watch: {
    info: function (newVal, oldVal) {
        this.getUser()
    }
  },
  methods: {
    async getUser () {
      this.user = this.info
      this.credencial.name = this.user.credencial ? this.user.credencial.name : ''
      this.credencial.solicitado = this.user.credencial ? this.user.credencial.solicitado : 0
    },
    mudarTema () {
      if (this.theme > 9) {
        this.theme = 1
      } else {
        this.theme++
      }
    },
    renovarAlterar () {
      let currentUserId =this.user.uid

      this.user.credencial = ''

      db.collection('users').doc(currentUserId).update(this.user).then(function () {
        $('#confirm').modal('hide')
        Toast.fire({
          type: 'success',
          title: 'Credencial removida com sucesso! Agora você pode refazer.'
        })
      })
    },
    getCodeCredential () {
      return this.user ? this.user.uid.toString().substr(-4) : '0000'
    },
    assinado () {
      return this.user.credencial ? (this.user.credencial.solicitado && this.user.credencial.assinado) : false
    },
    aguardandoAssinatura () {
      return this.user.credencial ? (this.user.credencial.solicitado && !this.user.credencial.assinado) : false
    },
    solicitado () {
      return this.user.credencial ? this.user.credencial.solicitado : false
    },
    getDate (param) {
      let dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1; //months from 1-12
      let year = dateObj.getUTCFullYear();
      month = month.toString()
      if(month.length === 1){
        month = '0'+ month
      }
      if (param === 'current') {
        let year = this.formatDateForCard(dateObj)
        return month + '' + year;
      } else {
        let c = new Date(year + 1, month, '01');
        let y = this.formatDateForCard(c)
        return month + '-' + y;
      }
    },
    formatDateForCard (dateObj) {
      return dateObj.getUTCFullYear().toString().substr(-2);
    },
    formatValidDate (dateObj) {
      return dateObj.replace('-', '/')
    },
    formatValidDateNumber (dateObj) {
      return dateObj.replace('-', '')
    },
    async createCrendential () {
      let currentUserId = ''

      if (this.currentRouter === 'profile') {
        currentUserId = fb.auth().currentUser.uid;
      } else {
        currentUserId = this.user.uid
      }

      this.credencial.emissao = this.getDate('current')
      this.credencial.validade = this.getDate()
      this.credencial.solicitado = 1
      this.credencial.backgroundUrl = this.backgroundUrl + this.theme
      this.credencial.dt_emissao = new Date()
      this.credencial.uid = this.user.uid
      this.user.credencial = this.credencial

      db.collection('users').doc(currentUserId).update(this.user).then(function () {
        Toast.fire({
          type: 'success',
          title: 'Solicitação de assinatura enviada com sucesso!'
        })
      })

    },
    abrevia (name, type) {
      if (!name) return
      name = name.trim()
      var splitName = name.split(" ");
      if (splitName.length >= 3) {
        for (let i = 1; i < splitName.length - 1; i++) {
          if (splitName.length === 1 || (splitName[i] === "de" || splitName[i] === "da" || splitName[i] === "do" || splitName[i] === "das" || splitName[i] === "dos")) {
            splitName[i] = type ? '' : splitName[i]
          } else {
            splitName[i] = splitName[i].charAt(0) + '';
          }
        }
      }
      return splitName.join(" ")
    }
  }
};
</script>

<style scoped lang="scss">

</style>
