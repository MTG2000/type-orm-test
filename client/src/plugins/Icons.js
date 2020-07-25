import Vue from "vue";

/* Pick one way between the 2 following ways */

// only import the icons you use to reduce bundle size
import "vue-awesome/icons/file";
import "vue-awesome/icons/file-pdf";
import "vue-awesome/icons/file-audio";
import "vue-awesome/icons/file-video";
import "vue-awesome/icons/paperclip";
import "vue-awesome/icons/paper-plane";
import "vue-awesome/icons/smile";
import "vue-awesome/icons/arrow-down";
import "vue-awesome/icons/users";
import "vue-awesome/icons/user-plus";
import "vue-awesome/icons/phone";
import "vue-awesome/icons/plus";
import "vue-awesome/icons/bars";
import "vue-awesome/icons/arrow-left";
import "vue-awesome/icons/check";
import "vue-awesome/icons/times-circle";
import "vue-awesome/icons/trash-alt";
/* Register component with one of 2 methods */

import Icon from "vue-awesome/components/Icon";

// globally (in your main .js file)
Vue.component("v-icon", Icon);
