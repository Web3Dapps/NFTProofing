import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'; // import router from angular router
import {Moralis} from 'moralis';
import {environment} from "src/environments/environment";

export type User = Moralis.User<Moralis.Attributes>;

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    userData: any
    nftsList: any;
    characterResult: any[] = [];

    constructor(private route: Router) {
        Moralis.start({
            appId: environment.appId,
            serverUrl: environment.serverUrl,
        })
            .then(() => console.info('Moralis has been initialised.'));

        Moralis.User.currentAsync().then((user) => {
            this.userData = user
        });
    }

    ngOnInit(): void {
    }

    async getNfts(id: string) {
        const address = this.userData?.attributes?.['ethAddress'];
        const options = {chain: id, address: address};
        // @ts-ignore
        const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);
        console.log(polygonNFTs);

        this.nftsList = polygonNFTs.result;
    }

    getNFT(data: any) {
        this.route.navigate(['/nfts', data?.symbol]);
        console.log(data);
    }

    goToHome() {
        this.route.navigate(['/home'])
    }

}
