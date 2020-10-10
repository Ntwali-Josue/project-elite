import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();
describe('Welcome', () => {
    it('/user should get a message', (done) => {
        chai.request(app)
        .get('/')
        .then((res) => {
            res.body.status.should.be.equal(200),
            done()
        });
    })
})