/* Jako że w projekcie nie ma żadnych testów automatucznych, to nie przygotowywałem projektu
pod uruchaniamie testów. Potencjalne mocki dodaje oznaczone komentarzem w każdym tescie.

Zakładam że testy są pisane w Jestcie.
*/
const db = {};

describe('Articles', () => {
  describe('getLastTenMatureContentArticles', () => {
    it('should return an empty array if there are no articles', () => {
      /*Faked DB mock */
      db = {
        Articles: []
      }

      request(app)
        .get('/articles/mature-content')
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body).toEqual([])
        });
    });

    it('should return an empty array if there are no mature-content articles', () => {
      /*Faked DB mock */
      db = {
        Articles: [
          { slug: '1', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: false, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '2', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: false, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '3', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: false, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },

        ],
        Users: [
          { email: 'test@test.com', username: 'test-username', password: 'password' }
        ]
      }

      request(app)
        .get('/articles/mature-content')
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body).toEqual([])
        });
    });

    it('should return all mature-content articles if there are less than 10', () => {
      /*Faked DB mock */
      db = {
        Articles: [
          { slug: '1', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '2', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '3', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: false, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },

        ],
        Users: [
          { email: 'test@test.com', username: 'test-username', password: 'password' }
        ]
      }

      request(app)
        .get('/articles/mature-content')
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body.length).toEqual(2)
          expect(response.body).toEqual([
              { slug: '1', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
              { slug: '2', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          ])
        });
    });

    it('should return all mature-content articles if there are less than 10', () => {
      /*Faked DB mock */
      db = {
        Articles: [
          { slug: '1', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '2', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: false, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '3', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '4', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '5', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: false, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '6', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '7', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '8', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: false, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '9', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '10', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '11', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '12', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '13', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '14', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          { slug: '15', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },

        ],
        Users: [
          { email: 'test@test.com', username: 'test-username', password: 'password' }
        ]
      }

      request(app)
        .get('/articles/mature-content')
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body.length).toEqual(10)
          expect(response.body).toEqual([
            { slug: '1', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
            { slug: '3', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
            { slug: '4', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
            { slug: '6', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
            { slug: '7', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
            { slug: '9', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
            { slug: '10', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
            { slug: '11', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
            { slug: '12', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
            { slug: '13', title: 'test-title', description: 'test-description', body: 'test-body', matureContent: true, createdAt: Date.now(), updatedAt: Date.now(), UserEmail: 'test@test.com' },
          ])
        });
    });
  })
})