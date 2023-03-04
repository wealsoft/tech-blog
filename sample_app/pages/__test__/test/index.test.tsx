import Home from "../../index";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

describe("Sampleコンポーネント", () => {
  test("should first", () => {
    const { getByText } = render(<Home />);
    // テキストを取得→親要素にaタグがあるか確認→hrefと特定のURLが含まれているか確認
    expect(getByText('Next.js!').closest('a')).toHaveAttribute('href', 'https://nextjs.org');
  });
}); 