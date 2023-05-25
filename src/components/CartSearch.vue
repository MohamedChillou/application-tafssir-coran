<template>
    <div class="cart" lang="ar">
      <div class="cart_body">
        <h3 id="title"><button @click="modifierVariable(titre,body,tafsir,mofasir,nAya,sura)"> <strong>  {{ titre }} </strong></button></h3> 
        <h4 id="body"> {{ body }} </h4>
        <h5 id="afficher" style="width: 100%;direction:rtl;">  {{ tafsir }} </h5>
      </div>
    </div>
</template>
<script>
export default {
  name: 'CartSearch',
  data(){
      return{
      }
  },
  props: {
    titre: String,
    body:String,
    tafsir:String,
    mofasir:String,
    sura:String,
    nAya:String
  },methods:{
    modifierVariable(nouvelleValeur1,nouvelleValeur2,nouvelleValeur3,nouvelleValeur4,nouvelleValeur5,nouvelleValeur6) {
      this.$store.commit('modifierTitre', nouvelleValeur1);
      this.$store.commit('modifierBody', nouvelleValeur2);
      this.$store.commit('modifierTafsir', nouvelleValeur3);
      this.$store.commit('modifierMofasir', nouvelleValeur4);
      this.$store.commit('modifierNAya', nouvelleValeur5);
      this.$store.commit('modifierSura', nouvelleValeur6);

      window.location="http://localhost:8080/tafsir"

      console.log()
      /*
        
      */

    }
  }
}
</script>
<style>
  .cart {
      background: none;
      border: solid 0px;
      text-align: right;
      margin-top: 3%;
  }
body a{
  color: black;
  text-decoration: none;
}
@font-face {
    font-family: "quran" ;
    src: url('../dg-kufi/Al\ Majeed\ Quranic\ Font_shiped.ttf');
}

#body{
  font-family: quran;
}

.cart_body{
  margin-right: 4%;
  margin-left: 4%;
  text-align: right;
}
#afficher{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Nombre de lignes à afficher */
  -webkit-box-orient: vertical;
  width: 100%;
  color: grey;
  text-align: right;
}
button{
  background: none;
  border: solid 0px;
}
button:hover{
   color: blue;
}


</style>