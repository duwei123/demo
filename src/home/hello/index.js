import './index.css';
import { InitApp } from '../common/app';
import { generateLangs } from '../common/i18n';
import enUS from './languages/en-US.json';
import zhCN from './languages/zh-CN.json';
import helloPage from './hello-page';

const dependencies = [];

const app = InitApp(generateLangs(enUS, zhCN), dependencies, helloPage);

export default app;


