import './styles/styles.scss';
import 'normalize.css';

console.log('worked');

class Linter {
    public lintCode() {
        console.log('lint code');
    }
}

const linter = new Linter();
linter.lintCode();
