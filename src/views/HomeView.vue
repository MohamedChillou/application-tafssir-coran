<template>
  <div class="home">

    <div class="nav" style="" >
        <div style="display: flex; width: 100%;" >
          <img id="im1" src="../assets/Faculte_Science-removebg-preview.png"  v-if="this.searching==false">
        </div>
      <div class="barRecherche" style="height: 9%;position: fixed;border: solid 0px;background-color:white; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;" v-if="this.searching==true">
        <a href="/">
          <img id="im1" src="../assets/Faculte_Science-removebg-preview.png" style="width: 70px; height: 70px;border: solid 0px;">
        </a>

        <div class="input-group mb-3" style="border: solid 0px; width: 30%;" >
          <input type="text" class="form-control" placeholder="البحث في الآيات و التفاسير  " aria-label="Username" aria-describedby="basic-addon1" v-model="cherche" style="margin-top:3%;width: 100%;" @keydown.enter="search()" >
        </div>
        <button @click="search()">
          <img src="../assets/chercher.png" style="width: 30px;margin-right:100%;border: solid 0px;">
        </button>
    </div>

    </div>
    <div class="barRecherche" style="" v-if="this.searching==false">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="البحث في الآيات و التفاسير  " aria-label="Username" aria-describedby="basic-addon1" v-model="cherche" style="margin-top:3%;"  @keydown.enter="search()">
        </div>
        <button @click="search()">
          <img src="../assets/chercher.png" style="width: 30px;margin-right: 90%;border: solid 0px;">
        </button>
    </div>
        <div class="titre" lang="ar">
          <h1> موقع لتفسيرالقرآن الكريم </h1> 
          <div class="mokadima" v-if="this.searching==false">
            <p>إنّ تفسير القرآن الكريم هو العلم الذي صُرفت إليه جهودٌ حثيثةٌ وكثيرة، نظراً لأهميّة القرآن الكريم العظيمة والكبيرة في الإسلام، فهو المعجزة الخالدة الّتي أيّد الله بها نبيّه الكريم، وقد أنزله الله تعالى رحمةً وشفاءً ودواءً وفرجاً لعباده الفقراء في الأرض، وحريٌّ بنا نحن المسلمون العمل على فهم كلمات القرآن الكريم وتفسيره، للتعمّق أكثر في دروسه وتشريعاته الّتي أرسلها الله تعالى لتكون منهج حياةٍودستوراًوحضارة</p> 
          </div>
        </div>
        <div class="compCart" v-if="this.searching==true">
  
        <CartSearch v-for="t in tafs" v-bind:key="t.id"
          :titre = "t.tafsir"
          :body= "t.Aya"
          :tafsir= "t.Texte"
          :nAya="t.NAya"
          :sura="t.soura"
          :mofasir="t.mofassir"

          />
          <div>
            <p style="font-family: arabic" v-if="this.pageNumber==0">لا توجد اي نتائج</p>
          </div>

        <div style="display: flex;margin-top: 8%;flex-wrap: wrap; gap: 25px;justify-content: center;margin-bottom: 3%" >
          <button><p style="font-family: arabic;" v-if ="this.numbreFinal>10" @click="moins()">-</p></button>
          <button class="pagenation" v-for="p in page" v-bind:key="p" @click="chercher(p)" :id="'id'+p">
            <p style="font-family: arabic;"> 
              {{ p }}
            </p>
          </button>
          <button><p style="font-family: arabic;" v-if ="this.numbreFinal>10 || this.numbreFinal < this.pageNumber" @click="plus()">+</p></button>

        </div>
        </div>        
  </div>      
</template>

<script>

  import axios from "axios";
  import CartSearch from '@/components/CartSearch.vue';
  
  export default {
    name: 'HomeView',
    components:{
      CartSearch,
      
      
    },data(){
      return{
        cherche:'',
        searching :false,
        tafs:[],
        page:[],
        pageNumber:0,
        numbreFinal:0,
        pageEmpty:true
      }
    },
    created(){
    
 
    },
    methods:{
      afficher(){
        alert(this.cherche)
      },search(){
        this.searching=true
        this.page=[]
        try {
          axios.post(
                    'http://localhost:8081/search/',
                    { query:this.cherche,page:1}
                ).then((res)=>{
                  this.tafs=res.data
                  if(this.tafs.length >2){
                     this.pageNumber =this.tafs[10].page;

                  }
                    if(this.pageNumber>0){                   
                       for (let index = 1; index <= 10; index++) {
                         this.page.push(index);                  
                    } }

                }) 
        } catch (error) {
          console.log('erreur')
           }
                console.log( this.pageNumber)
                this.numbreFinal=10;
           
      },chercher(pages){
          this.page.forEach(element => {
            let ement = document.getElementById('id'+element);
            if (ement) {
              ement.style.color = 'black';
          }            
          });
          const myElement = document.getElementById('id'+pages);
          if (myElement) {
            myElement.style.color = 'blue';
          }
          this.tafs=[]
          axios.post(
                    'http://localhost:8081/search/',
                    { query:this.cherche,page:pages}
                ).then((res)=>{
                  this.tafs=res.data
                    console.log(res);  
                })            
      },
      plus(){
        this.tafs=[]
        this.page=[]

        for (let index = this.numbreFinal+1; index <= this.numbreFinal+10; index++) {
                         this.page.push(index);   
                         axios.post(
                    'http://localhost:8081/search/',
                    { query:this.cherche,page:this.numbreFinal+1}
                ).then((res)=>{
                  this.tafs=res.data
                    console.log(res);  
                })  
          }
          this.numbreFinal=this.numbreFinal+10

      },
      moins(){
        this.tafs=[]
        this.page=[]

        for (let index = this.numbreFinal-19; index <= this.numbreFinal-10; index++) {
                         this.page.push(index);   
                         axios.post(
                    'http://localhost:8081/search/',
                    { query:this.cherche,page:this.numbreFinal-9}
                ).then((res)=>{
                  this.tafs=res.data
                    console.log(res);  
                })  
          }
          this.numbreFinal=this.numbreFinal-10


      }
    }
  }

</script>
<style>
  body{
    background-image: url('../assets/75290.jpg');
    background-size:100%;
    background-repeat: no-repeat ;
    border: solid 0px;
  }
  .home{
     /*     background-image: url('../assets/1327249.jpg');
      background-image: url('../assets/1327249.jpg');
    background-size:100%;
    background-repeat: no-repeat ;
 */
  }
  body .input-group{
      width: 40%;
      margin-left:31.5%;
      display: flex;
  }
  
  body .form-control{
    border-radius: 20px;
    height: 40px;
  }

  .barRecherche{
    margin-top: 0%;
    display: flex;
    border: solid 0px;
    width: 100%;
    height: auto;
  }

  #im1{
    width: 100px; 
    height: 100px
    }
  
  #im2{
    width: 8%;
    margin-left: 85%;
    
  }
 
  .nav{
    width: 100%;
    border: solid 0px;
  }
  
  @font-face {
    font-family: "arabic" ;
    src: url('../dg-kufi/DG\ Kufi.ttf');
  }

  @font-face {
    font-family: "quran" ;
    src: url('../dg-kufi/Al\ Majeed\ Quranic\ Font_shiped.ttf');
  }
  
  .titre{
    font-family: arabic;
    margin-top: 8%;
    margin-bottom: 6%;
  }
  
  .compCart{
    background-color: white;
    border-radius: 20px;
    width: 90%;
    margin-left: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding-top: 1%;

  }
  
  .mokadima{
    margin-top: 8%;
    width: 50%;
    margin-left: 24.5%;
  }
  .pagenation{
    margin-left: 3%;
  }
  #id1{
    color: blue;
  }
  .input-group input{
      text-align: right ;
      font-family: arabic;

  }



</style>
