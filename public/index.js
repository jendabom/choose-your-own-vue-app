/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Choose your own Adventure!", 
      choice_description: "You are strong and heroic, you stand fearless outside a castle. You have come to save the prisoner and fight the dragon. To the left you see an open door, to the right a troll stands outside a gate in. Which way do you go?"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var FirstChoiceLeft = {
  template: "#first-choice-left",
  data: function() {
    return {
      message: "You chose Left!", 
      choice_description: "You chose left, you walk towards the open door, just then a dragon swoops down and breathes fire on you. You die."
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var FirstChoiceRight = {
  template: "#first-choice-right",
  data: function() {
    return {
      message: "You chose Right!",
      choice_description: "You approach the troll on the right tentatively. He greets you cheerily. 'I have been waiting for a hero to come rescue the prisoner. Here is a map to the interior of the castle!' Your new friend the troll lets you through the gate. He pauses for a moment, and is uncertain of which way to go. You have the map, he looks to you to make a decision. On the map you see to the right a garden, to the left the armory."
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var SecondChoiceLeft = {
  template: "#second-choice-left",
  data: function() {
    return {
      message: "You chose Left!", 
      choice_description: "You chose left, you walk towards the armory. The way is dark, but you get to the armory unscathed. Time to load up on weapons. As you come out of the armory you see the prisoner to the right and the dragon to the left."
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var SecondChoiceRight = {
  template: "#second-choice-right",
  data: function() {
    return {
      message: "You chose Right!",
      choice_description: "You chose to go towards the garden on the right, the troll does not wish to accompany you. He is allergic to flowers. While walking through the garden you get very sleepy. You lie down and fall into a deep slumber. The prisoner will not be saved today."
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var ThirdChoiceLeft = {
  template: "#third-choice-left",
  data: function() {
    return {
      message: "A hero emerges!", 
      choice_description: "You chose left, you run towards the dragon, you slay the dragon and you save the prisoner. You win."
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var ThirdChoiceRight = {
  template: "#third-choice-right",
  data: function() {
    return {
      message: "A hero emerges!",
      choice_description: "You chose to go towards the prisoner, the dragon swoops towards you. In the last moment you turn to see the troll cut the dragons head off with one mighty blow. The dragon is dead, and the troll saved the day. The person the troll was really waiting for was someone to stand by his side while the hero that was within him soared."
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};



var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/fc_left", component: FirstChoiceLeft },
    { path: "/fc_right", component: FirstChoiceRight },
    { path: "/sc_left", component: SecondChoiceLeft },
    { path: "/sc_right", component: SecondChoiceRight },
    { path: "/tc_left", component: ThirdChoiceLeft },
    { path: "/tc_right", component: ThirdChoiceRight },
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});

