export const PrimeVueConfig = {
  importStyle: true,
  importIcons: true,
  importTheme: "md-light-indigo",
  // # Prime Vue THEME Options
  // # bootstrap4-light-blue
  // # bootstrap4-light-purple
  // # bootstrap4-dark-blue
  // # bootstrap4-dark-purple
  // # md-light-indigo
  // # md-light-deeppurple
  // # md-dark-indigo
  // # md-dark-deeppurple
  // # mdc-light-indigo
  // # mdc-light-deeppurple
  // # mdc-dark-indigo
  // # mdc-dark-deeppurple
  // # fluent-light
  // # saga-blue
  // # saga-green
  // # saga-orange
  // # saga-purple
  // # vela-blue
  // # vela-green
  // # vela-orange
  // # vela-purple
  // # arya-blue
  // # arya-green
  // # arya-orange
  // # arya-purple
  // # nova
  // # nova-alt
  // # nova-accent
  // # nova-vue
  // # luna-amber
  // # luna-blue
  // # luna-green
  // # luna-pink
  // # rhea
};

/**
 * @description components
 */
const components = [
  "AutoComplete",
  "Calendar",
  "CascadeSelect",
  "Checkbox",
  "Chips",
  "ColorPicker",
  "Dropdown",
  "Editor",
  "InputMask",
  "InputNumber",
  "InputSwitch",
  "InputText",
  "Knob",
  "Listbox",
  "MultiSelect",
  "Password",
  "RadioButton",
  "Rating",
  "SelectButton",
  "Slider",
  "Textarea",
  "ToggleButton",
  "TreeSelect",
  "TriStateCheckbox",
  "Button",
  "SpeedDial",
  "SplitButton",
  "DataTable",
  "Column",
  "ColumnGroup",
  "DataView",
  "VirtualScroller",
  "FullCalendar",
  "OrderList",
  "OrganizationChart",
  "Paginator",
  "PickList",
  "Timelist",
  "Tree",
  "TreeTable",
  "Accordion",
  "AccordionTab",
  "Card",
  "DeferredContent",
  "Divider",
  "Fieldset",
  "Panel",
  "Splitter",
  "SplitterPanel",
  "ScrollPanel",
  "TabView",
  "TabPanel",
  "Toolbar",
  "ConfirmDialog",
  "ConfirmPopup",
  "Dialog",
  "OverlayPanel",
  "Sidebar",
  "Tooltip",
  "FileUpload",
  "Breadcrumb",
  "ContextMenu",
  "MegaMenu",
  "Menu",
  "Menubar",
  "PanelMenu",
  "Steps",
  "TabMenu",
  "TieredMenu",
  "Dock",
  "Chart",
  "Message",
  "Toast",
  "Carousel",
  "Galleria",
  "Image",
  "Avatar",
  "AvatarGroup",
  "Badge",
  "Chip",
  "BlockUI",
  "Inplace",
  "ScrollTop",
  "Skeleton",
  "ProgressBar",
  "ProgressSpinner",
  "Tag",
  "Terminal",
  "TerminalService",
];

/**
 * PrimeVue Resolver， Fix unplugin vue components
 *
 * @param {import("unplugin-vue-components/resolvers").PrimeVueResolverOptions} { importStyle = true, importIcons = true, importTheme = 'saga-blue' }
 * @return {import("unplugin-vue-components/dist/types").ComponentResolver}
 */
export function PrimeVueResolverLocal(
  options = {
    importStyle: true,
    importIcons: true,
    importTheme: "saga-blue",
  }
) {
  return (name) => {
    const sideEffects = [];

    if (options.importStyle)
      sideEffects.push("primevue/resources/primevue.min.css");

    if (options.importIcons) sideEffects.push("primeicons/primeicons.css");

    if (options.importTheme) {
      sideEffects.push(
        `primevue/resources/themes/${options.importTheme}/theme.css`
      );
    }

    // use <p-components></p-components>
    if (name.startsWith("P")) {
      const oName = name.slice(1);
      if (components.includes(oName)) {
        return {
          path: `primevue/${oName.toLowerCase()}/${oName}.vue`,
          sideEffects,
        };
      }
    }
  };
}
