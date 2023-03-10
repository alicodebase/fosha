import { QuillEditor, Quill } from '@vueup/vue-quill'
import ImageResize  from 'quill-image-resize-vue';


import '@vueup/vue-quill/dist/vue-quill.snow.css'


const alignClass = Quill.import('attributors/style/align');
const backgroundClass = Quill.import('attributors/style/background');
const colorClass = Quill.import('attributors/style/color');
const directionClass = Quill.import('attributors/style/direction');
const fontClass = Quill.import('attributors/style/font');
const sizeClass = Quill.import('attributors/style/size');

Quill.register(alignClass, true);
Quill.register(backgroundClass, true);
Quill.register(colorClass, true);
Quill.register(directionClass, true);
Quill.register(fontClass, true);
Quill.register(sizeClass, true);


Quill.register('modules/imageResize', ImageResize)

export default QuillEditor
