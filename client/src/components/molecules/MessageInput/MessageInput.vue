<script>
import { VRow, VCol, VTextField, VChip, VFileInput, VBtn } from "vuetify/lib";
import dateAndTime from "date-and-time";
import VEmojiPicker from "v-emoji-picker";

function hideOnClickOutside(element) {
  const outsideClickListener = event => {
    if (!element.contains(event.target) && isVisible(element)) {
      // or use: event.target.closest(selector) === null

      element.classList.remove("active");
      removeClickListener();
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
  };

  document.addEventListener("click", outsideClickListener);
}

const isVisible = elem =>
  !!elem &&
  !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length); // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js

export default {
  name: "message-input",
  data() {
    return { id: "", message: "" };
  },
  methods: {
    selectEmoji(emoji) {
      this.message += emoji.data;
    },
    openInput() {
      this.$refs["fileInput"].$el.querySelector("input").click();
    },
    openEmojis(e) {
      e.stopPropagation();
      hideOnClickOutside(this.$refs["emojis-picker"].$el);
      this.$refs["emojis-picker"].$el.classList.toggle("active");
    },
    uploadFiles(files) {
      this.$emit("upload", files);
    },
    sendMessage() {
      if (this.message.trim().length > 1) {
        this.$emit("input", this.message);
        this.message = "";
      }
    }
  },

  mounted() {
    hideOnClickOutside(this.$refs["emojis-picker"].$el);
  },

  render() {
    return (
      <VRow class="input px-2">
        <div style="display:none">
          <VFileInput
            multiple
            ref="fileInput"
            hide-input
            onChange={this.uploadFiles}
          ></VFileInput>
        </div>
        <v-icon
          name="smile"
          class="align-self-center icon mx-3 emoji-icon"
          scale={2}
          onClick={this.openEmojis}
        />
        <VTextField
          label="Type Your Message"
          clearable
          class="align-self-center msg-input mt-3"
          rounded
          value={this.message}
          onInput={v => (this.message = v)}
          onKeydown={v => {
            if (v.keyCode === 13) this.sendMessage();
          }}
        />
        <v-icon
          name="paper-plane"
          class="align-self-center icon mx-3 send-icon"
          scale={2}
          onClick={this.sendMessage}
        />
        <v-icon
          name="paperclip"
          class="align-self-center icon mx-3 upload-icon"
          scale={2}
          onClick={this.openInput}
        />

        <VEmojiPicker
          ref="emojis-picker"
          class="emojis-picker"
          onSelect={this.selectEmoji}
        />
      </VRow>
    );
  }
};
</script>




<style lang="scss" scoped>
.input {
  background-color: #eee;
  // border: 1px solid #999;
  // border-radius: 30px;
  max-height: 80px;
  position: relative;
}

.msg-input {
  @media screen and (max-width: 480px) {
    width: 100px;
  }
}
.icon {
  width: 20px;
}

.emojis-picker {
  position: absolute;
  bottom: 100%;
  display: none !important;
  &.active {
    display: block !important;
  }
}

.upload-icon,
.emoji-icon {
  cursor: pointer;
  color: #999;
  &:hover {
    color: #666;
  }
}
.send-icon {
  cursor: pointer;
  color: #03a9f4;
  transition-duration: 0.4s;
  &:hover {
    transform: rotateZ(20deg) scale(1.2);
  }
}
</style>