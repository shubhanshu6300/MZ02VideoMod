const state = {
  courses: [
    {
      name: "Course 1",
      docs: [
        {
          name: "Doc 1",
          type: "pdf",
          link: "https://s3.ap-south-1.amazonaws.com/snehatestmz/sample.pdf"
        },
        {
          name: "Doc 2",
          type: "pdf",
          link: "https://s3.ap-south-1.amazonaws.com/snehatestmz/sample.pdf"
        },
        {
          name: "Doc 3",
          type: "pdf",
          link: "https://s3.ap-south-1.amazonaws.com/snehatestmz/sample.pdf"
        }
      ]
    }
  ],
  activeDoc: null,
};

const getters = {
  courses: ({ courses }) => courses,
  activeDoc: ({ activeDoc, courses}) => activeDoc || courses[0].docs[0]
};

const mutations = {
  showDoc (state, doc) {
    state.activeDoc = doc;
  }
};

export default {
  state,
  getters,
  mutations
};
