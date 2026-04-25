import { test, expect } from '../../fixtures/baseFixture';
import { testProducts } from '../../config/testData';

test.describe('Test Case 9: Search Product', () => {
    test('User should be able to search for a product', async ({ page, homePage }) => {
        // Arrange
        await homePage.navigateToHome();
        // Act
        await homePage.navigateToProducts();
        await homePage.searchProduct(testProducts.searchTerm);
        // Assert
        const productCount = await homePage.getProductCount();
        expect(productCount).toBeGreaterThan(0);
    });
});