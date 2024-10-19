<template>
  <div class="background">
    <h2>All Planet</h2>
    <h4>Planet All : {{ filteredBlogs.length }}</h4>

    <!-- แสดงผลข้อมูล -->
    <div v-for="blog in filteredBlogs" v-bind:key="blog.id" class="blog-container">
      <div class="blog-info">
        <p>PlanetName: {{ blog.Planet }}</p>
        <p>Size: {{ blog.Size }}</p>
        <p>Mass: {{ blog.Mass }}</p>
        <p>Surface Gravity: {{ blog.Gravity }}</p>
        <p>Rotation Period: {{ blog.Period }}</p>
        <p>
          <button v-on:click="navigateTo('/blog/'+ blog.id)" class="btn btn-info">ดูข้อมูล</button>
        </p>
      </div>
      <div class="blog-image">
        <!-- แสดงรูปภาพ -->
        <div v-html="blog.content"></div>
      </div>
    </div>
  </div>
</template>

<script>

import BlogsService from '@/services/BlogsService'

export default {
  data() {
    return {
      BASE_URL: "http://localhost:8081/assets/uploads/",
      blogs: [],
      searchQuery: ""  // ฟิลด์สำหรับเก็บค่าค้นหา
    };
  },
  async created() {
    this.blogs = (await BlogsService.index()).data;
  },
  computed: {
    // ฟังก์ชันกรองผลลัพธ์การค้นหา
    filteredBlogs() {
      return this.blogs.filter(blog =>
        blog.Planet.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.blog-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ff0000;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
}

.blog-info {
  flex: 2;
  padding-right: 20px;
}

.blog-image {
  flex: 1;
  text-align: center;
}

.blog-image img {
  max-width: 200px;
  height: auto;
  border-radius: 10px;
}

.btn {
  margin-top: 10px;
}

h2, h4 {
  text-align: center;
}

.background {
  background-image: url('~@/assets/BG2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh; 
  height: 100%; 
  width: 100%;
}

.header-background {
  background-image: url('../../assets/BG2.jpg'); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}

.search-container {
  margin: 20px 0;
  text-align: center;
}

.search-container input {
  padding: 8px;
  width: 200px;
  margin-right: 10px;
}
</style>
