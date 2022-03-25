<template>
  <div class="hello">
    <h1>Projects</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Description</th>
            <th class="text-left">Start date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects.data" :key="project.id">
            <td>{{ project.attributes.name }}</td>
            <td>{{ project.attributes.description }}</td>
            <td>{{ project.attributes.start_date }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import gql from "graphql-tag";

// Simple query that will update the 'hello' vue property

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  apollo: {
    projects: gql`
      {
        projects {
          data {
            attributes {
              name
              description
              start_date
            }
          }
        }
      }
    `,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  margin-left: 5%;
  margin-top: 20px;
}
</style>
