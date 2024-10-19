<template>
  <div>
    <div class="nv-navbar">
      <ul class="nav">
        <!-- อ้างอิง router-link ไปยังหน้า blogs -->
        <li><router-link :to="{ name: 'blogs' }">Planet</router-link></li>
        <li><router-link :to="{ name: 'users' }">Users</router-link></li>
        <!-- แก้ไขให้ router-link ไปยังหน้าเพิ่ม motorcycle -->
        <li><router-link :to="{ name: 'blog-create' }">Add Planet</router-link></li>
        
        <!-- ตรวจสอบสถานะ Login -->
        <li class="nav-right">
          <router-link v-if="isLogin()" @click.native="logout" to="#">Logout</router-link>
          <router-link v-else :to="{ name: 'login' }">Login</router-link>
        </li>  
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isLogin() {
      return this.$store.getters.isUserLoggedIn; // ตรวจสอบสถานะการล็อกอิน
    },
    logout() {
      this.$store.dispatch('logout'); // เรียกใช้งาน logout action
      this.$router.push({ name: 'login' }); // ย้ายไปที่หน้า login หลังจากออกจากระบบ
    }
  }
};
</script>

<style scoped>
/* ปรับปรุงการจัดเรียง Navbar */
.nv-navbar {
  background-color: rgb(0, 0, 0);
  padding: 10px;
  width: 100%;
}

.nv-navbar .nav {
  display: flex; /* ใช้ Flexbox แทนการ float */
  justify-content: space-between; /* จัดวางให้อยู่ทั้งซ้ายและขวา */
  list-style: none;
  margin: 0;
  padding: 0;
}

.nv-navbar .nav li {
  margin-right: 20px; /* เพิ่มระยะห่างระหว่างไอเท็ม */
}

.nv-navbar .nav li a {
  padding: 10px;
  text-decoration: none;
  color: gray;
  font-weight: bold;
}

.nv-navbar .nav li a:hover {
  color: darkslategrey;
}

.nv-navbar .nav li a.router-link-active {
  background-color: rgb(255, 255, 255);
  color: darkslategrey;
  border-radius: 5px; /* เพิ่มมุมโค้งให้กับแท็บที่เลือก */
}

/* การจัดเรียงปุ่ม Logout ไปที่มุมขวา */
.nav-right {
  margin-left: auto;
}
</style>
