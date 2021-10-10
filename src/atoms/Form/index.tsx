import './form.scss';
import Select from './components/Select';
import Input from './components/Input';
import Field from './components/Field';
import Control from './components/Control';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Label from './components/Label';
import InputFile from './components/InputFile';
import Help from './components/Help';
import Textarea from './components/Textarea';

const Form: {
  Field: typeof Field;
  Label: typeof Label;
  Control: typeof Control;
  Select: typeof Select;
  Input: typeof Input;
  Checkbox: typeof Checkbox;
  Radio: typeof Radio;
  Help: typeof Help;
  Textarea: typeof Textarea;
  InputFile: typeof InputFile;
} = {
  Field,
  Control,
  Select,
  Input,
  Checkbox,
  Radio,
  Label,
  InputFile,
  Help,
  Textarea,
};

export default Form;
