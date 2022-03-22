import { getModuleByProps } from '../utils/modules';

const React = getModuleByProps('createElement');

const ComponentsModule = getModuleByProps(
  'Button',
  'Text',
  'View',
);

const FormsModule = getModuleByProps(
  'Form',
  'FormSection',
);

const {
  Button,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Touchable,
  View,
  VirtualizedList,
} = ComponentsModule;

const {
  Form,
  FormArrow,
  FormCTA,
  FormCTAButton,
  FormCardSection,
  FormCheckbox,
  FormDivider,
  FormHint,
  FormIcon,
  FormInput,
  FormLabel,
  FormRadio,
  FormRow,
  FormSection,
  FormSelect,
  FormSubLabel,
  FormSwitch,
  FormTernaryCheckBox,
  FormText,
  FormTextColors,
  FormTextSizes,
} = FormsModule;

export {
  React,

  Button,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Touchable,
  View,
  VirtualizedList,

  Form,
  FormArrow,
  FormCTA,
  FormCTAButton,
  FormCardSection,
  FormCheckbox,
  FormDivider,
  FormHint,
  FormIcon,
  FormInput,
  FormLabel,
  FormRadio,
  FormRow,
  FormSection,
  FormSelect,
  FormSubLabel,
  FormSwitch,
  FormTernaryCheckBox,
  FormText,
  FormTextColors,
  FormTextSizes,
};
