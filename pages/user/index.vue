<template>
    <div class="container">
        <h1>Login</h1>
        <div class="email-field">
            <input type="text" class="email-input" id="email">
            <label class="email-label" for="email">Email</label>
        </div>
        <div class="password-field">
            <input type="text" class="password-input" id="password">
            <label class="password-label" for="password">Password</label>
        </div>
        <a class="forgot-link">Forgot your password?</a>
        <button class="sign-in">Sign in</button>
        <a class="account-link">Create account</a>
    </div>
</template>

<style scoped>
    .container{
        box-sizing: border-box;
        padding: 4rem 0 2rem 0;
        display: flex;
        width: 27rem;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 auto;
        overflow: hidden;
    }


    h1{
        box-sizing: border-box;
        margin-bottom: 2rem;
        font-size: 2.5rem;
        font-weight: 500;
    }

    .email-field, .password-field{
        box-sizing: border-box;
        box-shadow: 0 0 0 0.0625rem var(--gray400);
        /* width: fit-content; */
        padding: 1rem 0.5rem 0.5rem 1rem;
        position: relative;
        margin-bottom:1rem;
        transition: all 0.1s ease-in-out;
        color: var(--gray200);
    }

    .email-field:hover, .password-field:hover{
        box-shadow: 0 0 0 0.125rem var(--gray200);
    }


    .email-label , .password-label{
        position: absolute;
        top: 1.125rem;
        left: 1rem;
        transition: all .2s;
    }

    .email-input, .password-input{
        height: 1.5rem;
        padding: 0;
        outline: none;
        border: none;
        width: 25rem;
    }

    .email-input:focus + label, .password-input:focus + label{
       top:0.25rem;
       font-size: 0.75rem;
    }

    .forgot-link, .account-link{
        margin-right: auto;
        margin-bottom: 3rem;
        color: var(--gray200);
        font-size: 0.875rem;
        text-decoration: underline;
        text-underline-offset: 0.25rem;
        cursor: pointer;
    }

    .sign-in{
        outline: none;
        border: none;
        background-color: var(--black100);
        color: var(--gray100);
        padding: 0.875rem 2.5rem;
        font-size: 1rem;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    
    .sign-in:hover{
        transform: scale(1.03);
    }

    .account-link{
        margin: 0 auto;
    }

    @media only screen and (max-width: 500px)  {
        .container{
            width: 100%;
        }

        .email-field, .password-field{
            width:calc(100% - 0.25rem);
        }
        .email-input, .password-input{
        height: 1.5rem;
        padding: 0;
        outline: none;
        border: none;
        width:100%;
    }

    }

</style>