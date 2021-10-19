export default class BookStorePage{
    private loginButton = '#login';
    private searchInputBox = '#searchBox';
    private profileOptionLocator = 'Profile';

    navigateToLoginPage(): void{
        cy.get(this.loginButton).click();
    }

    searchByBookName(bookName: string): void{
        cy.get(this.searchInputBox).type(bookName);
    }

    navigateToProfilePage(): void{
        cy.contains(this.profileOptionLocator).click();
    }
}