
function hasExpired(createdAt: string, expiredIn: number): boolean {
    const createdTime = new Date(createdAt).getTime() //10:07
    const expiredIn_ = new Date().getTime() - new Date(expiredIn).getTime();
    return createdTime < expiredIn_ ? true : false;
}

export default hasExpired;