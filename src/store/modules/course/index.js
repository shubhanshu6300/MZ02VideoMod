const modifyDocUrl = doc => {
  return Object.assign(doc, { link: "data:text/plain," + btoa(doc.link) });
};

const state = {
  courses: [
    {
      name: "Course 1",
      docs: [
        {
          name: "Doc 1",
          type: "pdf",
          link: "http://www.africau.edu/images/default/sample.pdf"
        },
        {
          name: "Doc 2",
          type: "pdf",
          link: "http://www.africau.edu/images/default/sample.pdf"
        },
        {
          name: "Doc 3",
          type: "pdf",
          link: "http://www.africau.edu/images/default/sample.pdf"
        }
      ]
    }
  ],
  activeDoc: null,
};

const getters = {
  courses: ({ courses }) => courses,
  activeDoc: ({ activeDoc, courses}) => modifyDocUrl(activeDoc || courses[0].docs[0])
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
