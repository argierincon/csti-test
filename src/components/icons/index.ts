import { App } from "vue";

import BriefcaseVue from "./Briefcase.vue";
import ChevronDownVue from "./ChevronDown.vue";
import ChevronLeftVue from "./ChevronLeft.vue";
import ChevronRightVue from "./ChevronRight.vue";
import ChevronUpVue from "./ChevronUp.vue";
import DownloadVue from "./Download.vue";
import EditVue from "./Edit.vue";
import EyeVue from "./Eye.vue";
import InfoCircleVue from "./InfoCircle.vue";
import PlusVue from "./Plus.vue";
import SearchVue from "./Search.vue";
import TrashVue from "./Trash.vue";
import UsersVue from "./Users.vue";

export const setIcons = (app: App) => {
  app.component("briefcase", BriefcaseVue);
  app.component("chevronDown", ChevronDownVue);
  app.component("chevronLeft", ChevronLeftVue);
  app.component("chevronRight", ChevronRightVue);
  app.component("chevronUp", ChevronUpVue);
  app.component("download", DownloadVue);
  app.component("edit", EditVue);
  app.component("eye", EyeVue);
  app.component("infoCircle", InfoCircleVue);
  app.component("plus", PlusVue);
  app.component("search", SearchVue);
  app.component("trash", TrashVue);
  app.component("users", UsersVue);
};
