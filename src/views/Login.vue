<template>
  <div class="login-wrapper">
    <div class="login-container">
      <h2>Route Management System</h2>
      <el-form @submit.prevent="handleLogin">
        <el-form-item>
          <el-input v-model="username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">{{ buttonText }}</el-button>
        </el-form-item>
      </el-form>
      <div data-v-8e361b94="" class="fle-set-language">
        <div data-v-487e19b2="" data-v-8e361b94="" class="fle-lang-select">
          <div data-v-487e19b2="" class="lang-item lang-item" @click="selectLanguage('中文')">中文</div>
          <div data-v-487e19b2="" class="lang-item lang-item" @click="selectLanguage('EN')">EN</div>
          <div data-v-487e19b2="" class="lang-item lang-item" @click="selectLanguage('ไทย')">ไทย</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      buttonText: 'Login' // Default button text
    };
  },
  methods: {
    handleLogin() {
      // Simple login logic for demonstration
      if (this.username === '0652674703' && this.password === 'Fleet2KL@2025') {
        this.$router.push('/home');
      }
    },
    selectLanguage(language) {
      switch (language) {
        case '中文':
          this.buttonText = '登录';
          break;
        case 'EN':
          this.buttonText = 'Login';
          break;
        case 'ไทย':
          this.buttonText = 'เข้าสู่ระบบ';
          break;
      }
    }
  }
};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

.fle-lang-select {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.lang-item {
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
}

.lang-item-active {
  background-color: #409EFF;
  color: white;
}

.el-button {
  width: 100%;
}
</style>