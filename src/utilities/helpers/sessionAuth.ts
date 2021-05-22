/* eslint-disable class-methods-use-this */
class SessionAuth {
  hasAccess() {
    return !!sessionStorage.getItem('[[access]]');
  }

  setAccessToken(token: string): void {
    sessionStorage.setItem('[[access]]', token);
  }

  getAccessToken() {
    return sessionStorage.getItem('[[access]]');
  }

  removeSession(): void {
    sessionStorage.clear();
  }
}

export default new SessionAuth();
