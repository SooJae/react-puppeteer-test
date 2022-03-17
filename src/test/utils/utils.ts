// 클릭 함수
export const onClickNavigate = (page: any) => async (selector: string, waitFor = -1) => {
    await page.click(selector);
    if (waitFor >= 0) {
        await page.waitFor(waitFor * 1000)
    } else {
        await page.waitForNavigation();
    }
}
