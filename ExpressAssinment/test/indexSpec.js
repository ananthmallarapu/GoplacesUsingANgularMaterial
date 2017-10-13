var should = require("chai").should();

supertest = require("supertest");
app = require("../app.js");
describe('testing the first route', function() {
    it('should return 200 status', function(done) {
      supertest(app)
        .get('/')
        .expect(200);
        done();
    });
  });
  describe('testing the  favoutites route', function() {
    it('should return 200 status', function(done) {
      supertest(app)
        .get('/fa')
        
        .expect(200);
        done();
    });
  });