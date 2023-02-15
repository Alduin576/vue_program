// // 实现 组件按需导入
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
// import {
//   Descriptions,
//   DescriptionsItem,
//   Drawer,
//   Link,
//   Cascader,
//   Button,
//   Form,
//   FormItem,
//   Input,
//   Tooltip,
//   TimePicker,
//   TimeSelect,
//   Progress,
//   Popover,
//   Steps,
//   Step,
//   Checkbox,
//   Carousel,
//   CarouselItem,
//   InfiniteScroll,
//   Container,
//   Header,
//   Aside,
//   Main,
//   Table,
//   TableColumn,
//   Select,
//   Option,
//   OptionGroup,
//   RadioGroup,
//   RadioButton,
//   Image,
//   Tree,
//   Upload,
//   Pagination,
//   Timeline,
//   TimelineItem,
//   Badge,
//   CheckboxGroup,
//   Radio,
//   ColorPicker,
//   DatePicker,
//   Collapse,
//   CollapseItem,
//   Col,
//   Row,
//   TabPane,
//   Dialog,
//   Tabs,
//   Tag,
//   Switch,
//   Breadcrumb,
//   BreadcrumbItem,
//   InputNumber,
//   Empty,
//   Autocomplete,
//   Menu
// } from 'element-ui'
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
// import Scrollbar from 'element-ui/lib/scrollbar'
// Vue.component(CollapseTransition.name, CollapseTransition)

// const components = [Menu, TimeSelect, Autocomplete, DescriptionsItem, Descriptions, Drawer, Link, Button, Cascader, Form, FormItem, Input, Breadcrumb, BreadcrumbItem, Tooltip, TimePicker, Progress, Popover, Steps, Step, Checkbox, InfiniteScroll, Carousel, CarouselItem, CheckboxGroup, Container, Header, Aside, Main, Scrollbar, Table, TableColumn, Select, Option, OptionGroup, RadioGroup, RadioButton, Image, Tree, Upload, Pagination, Timeline, TimelineItem, Badge, Radio, ColorPicker, DatePicker, Collapse, CollapseItem, Col, Row, TabPane, Dialog, Tabs, Tag, Switch, InputNumber, Empty]
// components.forEach(v => Vue.use(v))