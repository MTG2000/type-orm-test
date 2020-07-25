<script>
import { VRow, VCol, VAvatar, VChip, VImg } from "vuetify/lib";
import dateAndTime from "date-and-time";
import Enums from "../../../helpers/enums";
import placeholderImage from "./placeholder-image.png";

export default {
  name: "message",
  props: {
    files: {
      type: Array,
      required: false,
      default: () => []
    },
    messageType: {
      type: Number,
      required: false
    }
  },

  render() {
    if (this.files.length === 0) return;

    return (
      <div class="msg-content px-3 py-3 d-flex justify-center">
        {this.messageType == Enums.MessagesTypes.Photo &&
          this.files.length === 1 && (
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`${this.files[0].preview ? "" : this.$api}${
                this.files[0].url
              }`}
            >
              <VImg
                src={`${this.files[0].preview ? "" : this.$api}${
                  this.files[0].url
                }`}
                lazy-src={placeholderImage}
                width="100%"
                contain
                eager
              ></VImg>
            </a>
          )}
        {this.messageType == Enums.MessagesTypes.Photo &&
          this.files.length > 1 && (
            <VRow>
              {this.files.map(file => (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`${this.files[0].preview ? "" : this.$api}${file.url}`}
                >
                  <VImg
                    class="img-min mx-2 mb-2"
                    src={`${this.files[0].preview ? "" : this.$api}${file.url}`}
                    lazy-src={placeholderImage}
                    width="100%"
                    contain
                    eager
                  ></VImg>
                </a>
              ))}
            </VRow>
          )}
        {this.messageType === Enums.MessagesTypes.Document && (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`${this.files[0].preview ? "" : this.$api}${
              this.files[0].url
            }`}
          >
            <v-icon name="file-pdf" scale={6} title={this.files[0].name} />
            <br />
            <label>{this.files[0].name}</label>
          </a>
        )}
        {this.messageType === Enums.MessagesTypes.Video && (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`${this.files[0].preview ? "" : this.$api}${
              this.files[0].url
            }`}
          >
            <v-icon name="file-video" scale={6} title={this.files[0].name} />
            <br />
            <label>{this.files[0].name}</label>
          </a>
        )}
        {this.messageType === Enums.MessagesTypes.Audio && (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`${this.files[0].preview ? "" : this.$api}${
              this.files[0].url
            }`}
          >
            <v-icon name="file-audio" scale={6} title={this.files[0].name} />
            <br />
            <label>{this.files[0].name}</label>
          </a>
        )}
        {this.messageType === Enums.MessagesTypes.Voice && (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`${this.files[0].preview ? "" : this.$api}${
              this.files[0].url
            }`}
          >
            <v-icon name="file-audio" scale={6} title={this.files[0].name} />
            <br />
            <label>{this.files[0].name}</label>
          </a>
        )}
      </div>
    );
  }
};
</script>


<style lang="scss" scoped>
.msg-content {
  width: 100%;
  max-width: 150px;

  @media screen and (min-width: 992px) {
    max-width: 500px;
  }
  position: relative;

  a {
    max-width: 100%;
    color: #fff;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.03);
    }
  }

  img {
    cursor: pointer;
  }

  .single-img {
    width: 100%;
    padding: 10px;
    transition-duration: 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
  .img-min {
    width: 100%;
    max-width: 150px;
    transition-duration: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
.date {
  color: #999;
  font-size: small;
}
</style>