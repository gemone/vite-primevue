import components from './primevue.components.json';

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
    importTheme: 'saga-blue',
  },
) {
  return (name) => {
    const sideEffects = [];

    if (options.importStyle) sideEffects.push('primevue/resources/primevue.min.css');

    if (options.importIcons) sideEffects.push('primeicons/primeicons.css');

    if (options.importTheme) {
      sideEffects.push(`primevue/resources/themes/${options.importTheme}/theme.css`);
    }

    // use <p-components></p-components>
    if (name.startsWith('P')) {
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

export default PrimeVueResolverLocal;
