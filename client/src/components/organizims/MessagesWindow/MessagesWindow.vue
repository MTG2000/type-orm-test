<script>
import Vue from "vue";
import { VRow, VCol, VFabTransition, VChip, VBtn } from "vuetify/lib";
import dateAndTime from "date-and-time";
import Message from "../../atoms/Message/Message";
import Loading from "../../atoms/Loading";
import debounce from "lodash.debounce";

export default {
  name: "messages-window",
  props: {
    userId: {
      type: String,
      required: true
    },
    messages: {
      type: Array,
      required: false,
      default: () => []
    },
    loading: {
      trpe: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      showBackToBottomBtn: false
    };
  },
  methods: {
    scrollTop() {
      //Scroll the msgs window to the bottom

      this.$refs["msgs-container"].scrollTop = this.$refs[
        "msgs-container"
      ].scrollHeight;
    },
    heightFromTop() {
      const element = this.$refs["msgs-container"];

      //This code is for showing backToBottom btn
      if (
        element.scrollHeight - element.scrollTop - element.clientHeight >
        1000
      ) {
        this.showBackToBottomBtn = true;
      } else this.showBackToBottomBtn = false;

      // This code is for loading more messages
      if (element.scrollTop < 100) {
        this.$emit("fetch-more");
      }
    }
  },
  mounted() {
    this.scrollTop();
    this.$refs["msgs-container"].addEventListener(
      "scroll",
      debounce(this.heightFromTop, 350)
    );
  },
  watch: {
    messages: function(newVal, oldVal) {
      // watch it
      //Use nextTick to run the code AFTER Mounting the dom
      Vue.nextTick(() => {
        if (oldVal.length !== newVal.length)
          if (newVal[0] && oldVal[0] && newVal[0].id === oldVal[0].id)
            //if I fetched older msgs DONT scroll to bottom
            return;

        this.scrollTop();
      });
    }
  },

  render() {
    let msgs = [...this.messages].reverse();
    for (let i = 0; i < msgs.length - 1; i++) {
      msgs[i].showAvatar = msgs[i].user.id !== msgs[i + 1].user.id;
    }

    return (
      <div ref="msgs-container" class="msgs-container py-2">
        {this.loading && <Loading loadingText="Loading Your Messages..." />}
        <VFabTransition>
          <VBtn
            onClick={this.scrollTop}
            v-show={this.showBackToBottomBtn}
            style="z-index:1000; bottom:100px; right:30px;"
            color="#999"
            fab
            dark
            small
            fixed
            bottom
            right
          >
            <v-icon name="arrow-down" scale={1} />
          </VBtn>
        </VFabTransition>
        {!this.loading &&
          msgs.map((message, i) => (
            <Message
              key={message.id}
              id={message.id}
              date={message.created_at}
              side={message.user.id === this.userId ? 1 : 2}
              personName={message.user.name}
              data={message.content}
              // messageType={message.messageType}
              // files={message.files}
              showAvatar={message.showAvatar}
              loading={
                message.loading &&
                (Number.isInteger(message.loading) ? message.loading : -1)
              }
            ></Message>
          ))}
      </div>
    );
  }
};
</script>


<style lang="scss" scoped>
.msgs-container {
  background: rgb(255, 255, 255);
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 80px;
}

//ScrollBar
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>