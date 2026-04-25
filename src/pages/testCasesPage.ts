import { Page } from '@playwright/test';
import { BasePage } from './basePage';
import { Logger } from '../utils/helpers';

export class TestCasesPage extends BasePage {
  readonly TEST_CASES_SECTION = '.test_cases_list';
  readonly TEST_CASE_LINK = 'a[href*=\"/test_case/\"]';
  readonly TEST_CASE_HEADING = 'h2';

  constructor(page: Page) {
    super(page);
  }

  async navigateToTestCases() {
    Logger.log('Navigating to test cases page');
    await this.goto('/test_cases');
  }

  async isTestCasesSectionVisible(): Promise<boolean> {
    return await this.isVisible(this.TEST_CASES_SECTION);
  }

  async getTestCasesCount(): Promise<number> {
    return await this.page.locator(this.TEST_CASE_LINK).count();
  }

  async getTestCaseHeading(): Promise<string> {
    return await this.getText(this.TEST_CASE_HEADING);
  }

  async clickTestCase(index: number = 0) {
    Logger.log(`Clicking test case at index: ${index}`);
    const testCases = this.page.locator(this.TEST_CASE_LINK);
    await testCases.nth(index).click();
    await this.page.waitForLoadState('networkidle');
  }
}