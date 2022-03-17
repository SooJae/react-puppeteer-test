// ~src/test/e2e/tests.Login.test.ts

import { getSnapshotConfig } from '../imageComparison'
import initializeTest from '../initialize'
import {onClickNavigate} from "../../utils/utils";

const id = 'jerry.tom@kakao2enterprise.com';
const password = 'Admin123!!'

it(`Login Test`, async () => {
  // puppeteer 페이지 초기화 & 콜백함수 가져오기
  const { page, cleanUp } = await initializeTest()

  // 인풋 요소가 뜰때까지 대기
  await page.waitForSelector('#id01');
  // 타이핑
  await page.type('#id01', id, {delay: 200});
  await page.type('#password01', password, {delay: 200});

  onClickNavigate(page)('#loginButton',2000);

  // 버튼 클릭
  await page.click('#loginButton');

  //그림이 뜰때까지 대기
  await page.waitForSelector('img');

  // 스크린샷을 찍어서
  const image = await page.screenshot({ fullPage: true })

  // Snapshot config 에 정의된 대로 비교
  const snapshotConfig = getSnapshotConfig()
  expect(image).toMatchImageSnapshot(snapshotConfig)

  await cleanUp()
})

// Validation 일 경우 기다리기
// await page.waitFor('button[name="submit"]:not([disabled])')
// 로딩바 사라질때까지 대기
// await page.waitForSelector('#loadingDiv', {hidden: true});
