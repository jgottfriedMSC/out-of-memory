import {Component, OnDestroy, OnInit} from '@angular/core';
import {DecksBackendService} from "../../../../core/decks/decks-backend.service";
import {Deck} from "../../../../shared/models/deck.model";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs/operators";
import {Subscription} from "rxjs";
import {CardsBackendService} from "../../../../core/cards/cards-backend.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'page-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.scss']
})
export class DeckDetailComponent implements OnInit, OnDestroy {

  routeSub: Subscription;

  id: string;
  deck: Deck;

  constructor(private route: ActivatedRoute, private toastr: ToastrService, private deckBackend: DecksBackendService, private cardBackend: CardsBackendService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['deck'];
      this.deckBackend.getDeck(this.id).pipe(take(1)).subscribe(d => this.deck = d);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  deleteCard(id: string): void {
    if(this.cardBackend.deleteCard(id)) {
      this.toastr.success("Flashcard deleted", "Success!")
    } else {
      this.toastr.error("Flashcard could not be deleted", "Failed!")
    }
  }
}
