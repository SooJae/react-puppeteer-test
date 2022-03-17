// ~src/test/e2e/imageComparison.ts

import { MatchImageSnapshotOptions } from 'jest-image-snapshot'

export const getSnapshotConfig: (
  imageName?: string
) => MatchImageSnapshotOptions = (imageName) => {
  return {
    // 이미지를 비교할 방향
    diffDirection: 'horizontal',
    // 이미지의 차이를 콘솔에 나타낼 것인지
    dumpDiffToConsole: false,
    // 비교 방법 'pixelmatch' | 'ssim'
    comparisonMethod: 'pixelmatch',
    // 스냅샷 이름 정의
    customSnapshotIdentifier: imageName,
    // 비교 이미지 출력 경로
    customDiffDir: 'src/test/e2e/tests/__image_snapshots__/__diff_output__/'
  }
}
