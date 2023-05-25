<template>
  <div class="about">
    <div class="asembler">
      <div class="moffasir">
        <h4 style="margin-top: 1%;">{{  $store.state.mofasir }}</h4>
        <img src="../assets/arabe.png" style="width: 50px;height: 50px;margin-left: 4%;">
      </div>
      <div id="tafsi" style="display: flex;margin-bottom: 2%;">
        <h6 style="margin-top: 2%;">{{  $store.state.titre }}</h6>
        <img src="../assets/coran.png" style="width: 50px;height:50px ;margin-left: 5%;">
      </div>
    </div>
    <div class="coran">
      <h1 style="padding-top: 5%;">{{  $store.state.body }}</h1>
      <div class="surat_aya">
        <h5>سورة: {{ $store.state.sura}} &nbsp; | &nbsp; الاية : {{ $store.state.nAya }}</h5>
      </div>
    </div>
    <h2 style="font-family: arabic;margin-bottom: 4%;margin-top: 2%;"> : التفسير</h2>
    <div class="taf">
      <h5 style="font-family: sahil;text-align: right; margin-left: 2%;margin-right:2% ;letter-spacing: 1px;direction: rtl;"> <strong>{{  $store.state.tafsir }}</strong></h5>
    </div>    
</div>
</template>
<script>
  export default {
    name: 'TafsirView',
    data(){
      return{
        variable:undefined
      }
    },
    created(){
      console.log(this.maVariableGlobale);
    },

    computed: {
    maVariableGlobale() {
      return this.$store.state.nom;
    },
  },
  

   
  }
</script>
<style>

  #tafsi{
    display: flex;
    margin-left: 26%;
    border: solid 0px;
    width: 30%;
    height: 50%;
    margin-top: 2%;    
  }
  .moffasir{
    border: solid 0px;
    display: flex;
    width: 30%;
    margin-left: 10%;
    height: 50%;
    margin-top: 2%;



  }
  .asembler{
    display: flex;
    background-color:  rgba(245, 245, 220, 0.8);
    font-family: arabic;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        /*
          border-style: inset;
        */ 
  }
  @font-face {
    font-family: "arabic" ;
    src: url('../dg-kufi/DG\ Kufi.ttf');
  }
  @font-face {
    font-family: "quran" ;
    src: url('../dg-kufi/Al\ Majeed\ Quranic\ Font_shiped.ttf');
  }
  @font-face {
    font-family: "sahil" ;
    src: url('../dg-kufi/Sahel.ttf');
  }
  .coran{
    background-color: white;
    height: 200px;
    font-family: quran;
    width: 70% 0%;
    border-radius: 10px;
    margin:3%  5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  .taf{
    background-color: rgba(255, 255, 255, 0.55);
    margin: 3%  5%;
  }

  .surat_aya{
    padding-top: 3%;
    padding-right:80% ;
  }


</style>