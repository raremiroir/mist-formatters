import { formatText } from './src/text';
import { formatDateTime } from './src/datetime';
import { formatColor } from './src/color';

// All formatters
export const mFormat = {
   text: formatText,
   datetime: formatDateTime,
   color: formatColor,
}

// Text formatters
export { formatText } from './src/text';
// Date formatters
export { formatDateTime } from './src/datetime';
// Color formatters
export { formatColor } from './src/color';

export default mFormat;