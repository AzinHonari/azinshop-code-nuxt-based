<template>
    
    <div class="container">
        <h1>Contact us</h1>
        <form>
            <div class="name-field">
                <input type="text" class="name-input" id="name">
                <label class="name-label" for="name">Name</label>
            </div>
            
            <div class="email-field">
                <input type="text" class="email-input" id="email">
                <label class="email-label" for="email">Email *</label>
            </div>

            <div class="phone-field">
                <input type="text" class="phone-input" id="phone">
                <label class="phone-label" for="phone">Phone number</label>
            </div>

            <div class="comment-field">
                <input type="text" class="comment-input" id="comment">
                <label class="comment-label" for="comment">Comment</label>
            </div>

            <button class="send">Send</button>
        </form>
    </div>
</template>

<style scoped>
    .container{
        box-sizing: border-box;
        padding: 4rem 0 2rem 0;
        margin: 0 auto;
        width: 40rem;
    }


    h1{
        margin-bottom: 2rem;
        font-size: 3rem;
        font-weight: 500;
    }


    form{
        box-sizing: border-box;
        width: 100%;
        position: relative;
        overflow: hidden;
        padding: 0.125rem;
        color: var(--gray200);
    }
    .email-field, .name-field, .phone-field, .comment-field{
        box-sizing: border-box;
        box-shadow: 0 0 0 0.0625rem var(--gray400);
        padding: 1rem 0.5rem 0.5rem 1rem;
        position: relative;
        margin-bottom:1rem;
        transition: all 0.1s ease-in-out;
        float: left;
        
        width: 100%;
    }

    .name-field , .email-field{
        width: calc(50% - 0.5rem);
    }

    .name-field{
        margin-right: 1rem;
    }



    .email-field:hover, .name-field:hover, .phone-field:hover, .comment-field:hover{
        box-shadow: 0 0 0 0.125rem var(--gray200);
    }


    .email-label , .name-label, .phone-label, .comment-label{
        box-sizing: border-box;
        position: absolute;
        top: 1.125rem;
        left: 1rem;
        transition: all .2s;
    }

    .email-input, .name-input, .phone-input, .comment-input{
        box-sizing: border-box;
        height: 1.5rem;
        padding: 0;
        outline: none;
        border: none;
        width: 100%;
    }

    .phone-input, .comment-input{
        width: 100%;
    }


    .email-input:focus + label, .name-input:focus + label, .phone-input:focus + label, .comment-input:focus + label{
       top:0.25rem;
       font-size: 0.75rem;
    }

    .send{
        margin-top: 2rem;
        outline: none;
        border: none;
        background-color: var(--black100);
        color: var(--gray100);
        padding: 0.875rem 2.5rem;
        font-size: 1rem;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    
    .send:hover{
        transform: scale(1.03);
    }

    
    @media only screen and (max-width: 700px)  {
        .container{
        width: 100%;
    }

    
    .name-field , .email-field{
        width: 100%;
    }

    .name-field{
        margin-right: 0;
    }

}
</style>