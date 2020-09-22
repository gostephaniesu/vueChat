let data = {
  chat_old: ["Owner", "Customer"],
  chat: [
    { name: "Owner", theme: "darkTheme", say: "" },
    { name: "Customer", theme: "whiteTheme", say: "" }
  ],
  msg: [
    {
      timestamp: "2020/04/30 07:11:01",
      sender: "Owner",
      reciver: "Customer",
      message: "How area you?",
      isRead: true
    },
    {
      timestamp: "2020/04/30 08:22:02",
      sender: "Customer",
      reciver: "Owner",
      message: "Fine, thank you, and you?",
      isRead: true
    },
    {
      timestamp: "2020/04/30 09:33:03",
      sender: "Owner",
      reciver: "Customer",
      message: "Good.",
      isRead: false
    }
  ]
};

let vm = new Vue({
  el: "#app",
  data: data,
  computed: {},
  methods: {
    another(index) {
      return this.chat[index == 0 ? 1 : 0].name;
    },
    getTime() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      return date + " " + time;
    },
    msgHandler(index) {
      if (this.chat[index].say == "") {
        return;
      }
      let temp = {
        timestamp: this.getTime(),
        sender: this.chat[index].name,
        reciver: this.another(),
        message: this.chat[index].say,
        isRead: false
      };
      this.msg.push(temp);
      this.chat[index].say = "";
    }
  }
});
