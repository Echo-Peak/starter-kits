import {namespace} from './components/window/namespace';

function cats(){
console.log('yays', this , arguments);
}
namespace.beforeMount(cats ,['im foo']);
namespace.onload(cats);
namespace.mount('vue-starter-kit');