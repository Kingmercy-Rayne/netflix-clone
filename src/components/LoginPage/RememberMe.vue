<template>
  <div class="remember-me">
    <input type="checkbox" name="remember-me" />
    <span>Remember me</span>
  </div>
</template>

<script>
export default {};
</script>

 <style lang="stylus" scoped>
 .remember-me {
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   cursor: pointer;
   font-weight: 400;
   font-size: 0.8rem;
   opacity: 0.7;
   padding: 0.5em 0;

   input[type='checkbox'] {
     height: 1em;
     width: 1em;
     border: 1px solid #34495E;
     border-radius: 0.5em;
     outline: none;
     appearance: checkbox;
     transition-duration: 0.3s;
     cursor: pointer;

     &:checked {
       border: 1px solid #41B883;
       background-color: crimson;
     }

     input:checked + span::before {
       content: '\2713';
       display: block;
       text-align: center;
       color: #41B883;
       position: absolute;
       left: 0.7rem;
       top: 0.2rem;
     }
   }

   span {
     padding: 0 0.5em;
   }
 }
</style>
