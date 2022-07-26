<template>

 <main>
     

        <!-- HEADER -->
        <header class="header">
          
          <div class="logo">
            <img src="@/assets/images/logo.svg" alt="Logo">
            </div>

            <nav>
              <a href="#" v-for="navigationLink in navigation">{{navigationLink}}</a>
            </nav>
          
        </header>

        <!--  PRESENTATION  -->

        <section class="presentation">
          
          <!-- LEFT -->

          <div class="left">
            
            <h1 id="mainTitle">All your files in one secure location, accessible anywhere.</h1>
              <p id="mainParagraph">Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family,and co-workers.</p>
              
              <div class="getStarted">
                <form>
                <input type="email" name="mail" id="mail" placeholder="Enter your email" >
                <p class="errorMsgHidden">Please check your email</p>
                <input id="submitButton" type="submit" value="Get Started">
                </form>
              </div>

          </div>

          <!-- RIGHT -->

          <div class="right">
            <img src="@/assets/images/illustration-1.svg" alt="">
          </div>
        </section>


        <!-- PRODUCTIVE -->

        <section class="productive">

          <div class="left2">
                  <h2 class="main-title">Stay productive, wherever you are</h2>

                  <p class="main-paragraph">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>

                  <p class="second-paragraph">Seculery shares files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
                    
                  <a id="works" href="#">See how Fylo works <img class ="arrow" src="@/assets/images/icon-arrow.svg" alt="Arrow" ></a>

                  <div class="founder-card">

                        <blockquote>
                          <img src="@/assets/images/icon-quotes.svg" alt="Quotes"> <br>
                          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                          
                        </blockquote>

                        <div class="founder__info">
                              <div class="left3">
                                <img class="left3-img" src="@/assets/images/avatar-testimonial.jpg" alt="Founder & CEO , Huddle" height="40">
                                <div class="professional-info">
                                  <h3>Kyle Burton</h3>
                                  <p>Founder & CEO, Huddle</p>
                                </div>
                          </div>

                        
                        </div>

                    </div>
             </div>

               <div class="right3">
                            <img src="@/assets/images/illustration-2.svg" alt="">
                          </div>
        </section>

        <section class ="access">
          <div class="left4">
            <h2>Get early access today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you</p>
          </div>

          <div class="right4">
                <form>
                <input type="email" class="mail2" name="mail" placeholder="Enter your email" >
                <p  id="errorMsgHidden">Please check your email</p>
                <input  class="submitButton" type="submit" value="Get Started For Free">
                </form>
          </div>
        </section>
 </main>


</template>

<script>

  export default {
    
    data(){
      return {
        navigation : ['Features','Team','Sign In']
      }
    },

    mounted:function(){
      this.checkingEmailFormat(),
      this.checkingEmailFormat2()
    },

    methods: {
      checkingEmailFormat() {
        const form = document.querySelector('form')

        form.addEventListener('submit',(e) => {
           e.preventDefault()

      
          const errorMsgHidden = document.querySelector('.errorMsgHidden')
          const mail = document.getElementById('mail')
          let regexMail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)

            if(!regexMail.test(mail.value)) {

              errorMsgHidden.style.visibility = "visible"
              mail.style.border ="1px solid red"
            }

           else if(regexMail.test(mail.value)){

             alert('Your email have been send !')
            errorMsgHidden.style.visibility = "hidden"
            mail.style.border ="1px solid lightgray" 
           }

          
        })
      },

        checkingEmailFormat2() {
        const form = document.querySelector('.right4 > form')

        form.addEventListener('submit',(e) => {
           e.preventDefault()

      
          const errorMsgHidden = document.getElementById('errorMsgHidden')
          const mail = document.querySelector('.mail2')
          let regexMail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)


            if(!regexMail.test(mail.value)) {

              errorMsgHidden.style.display = "block"
              mail.style.border ="1px solid red"
            }

           else if(regexMail.test(mail.value)){

             alert('Your email have been send !')
            errorMsgHidden.style.display = "none"
            mail.style.border ="1px solid lightgray" 
           }


          
        })
      }
    },
  }

</script>

