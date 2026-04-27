import { test, expect } from '../../fixtures/baseFixture';
import { testUsers } from '../../config/testData';

test.describe('Test Case 3: Login User with correct email and password', () => {
    test('User should login successfully with valid credentials', async ({ page, loginPage, homePage }) => {
        // Arrange
        await homePage.navigateToHome();

        // Act
        await homePage.navigateToSignup();
        await loginPage.loginWithCredentials(testUsers.validUser.email, testUsers.validUser.password);

        // Assert
        await page.waitForLoadState('networkidle');
        const isLoggedIn = await loginPage.isLoggedInAsDisplayed();
        expect(isLoggedIn).toBe(true);
    });
});