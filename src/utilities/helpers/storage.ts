/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
class UserStorageFilter {
  get(key: string) {
    const data = JSON.parse(localStorage.getItem(key)!);

    if (!data) {
      return null;
    }

    return data;
  }

  set(key: string, data: any): void {
    const newData = { ...this.get(key), ...data };
    localStorage.setItem(key, JSON.stringify(newData));
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }
}

export default new UserStorageFilter();
