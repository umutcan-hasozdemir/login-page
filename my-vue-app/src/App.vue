<template>
  <div>
    <img src="/image/laksi.png" alt="Laksi Logo" style="display: block; margin: 0 auto; width: 180px; height: auto;">
    <h3 style="text-align: center;">Hoşgeldiniz!</h3>
    <p style="text-align: center;">Oturum açmak için Laksi'ye devam edin.</p>

    <form @submit.prevent="handleSubmit">
      <div class="email-container">
        <div class="email-content">
          <label for="email">E-posta</label>
          <input v-model="email" type="email" id="email" placeholder="E-posta adresinizi giriniz" required>
        </div>
      </div>

      <div class="password-container" style="position: relative;">
        <div class="password-content">
          <label for="password">Şifre</label>
          <input v-model="password" :type="inputType" id="password" placeholder="Şifrenizi giriniz" required>
          <span @click="toggleInputType" class="password-toggle" style="cursor: pointer; position: absolute; right: 10px; top: 50%; transform: translateY(-50%);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-eye" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
            </svg>
          </span>
        </div>
      </div>

      <button type="submit" class="btn-login" @click="enterPage()">Giriş Yap</button>
    </form>



    <router-view></router-view>
    <RouterLink to="/">Anasayfa</RouterLink>
    <RouterLink to="/iletisim">Boş Sayfa</RouterLink>
    <router-link to="/"></router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const email = ref('');
const password = ref('');
const inputType = ref('password');

const toggleInputType = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password';
};

const handleSubmit = () => {
  if (email.value && password.value) {
    alert("Laksi'ye hoş geldiniz!");
    window.location.href = "https://board.laksi.com.tr/call-center";
  } else {
    alert("Lütfen tüm alanları doldurun.");
  }
};

</script>


