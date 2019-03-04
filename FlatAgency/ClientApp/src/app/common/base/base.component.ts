import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Message } from 'primeng/primeng';

export class BaseComponent {

  constructor(
    private baseactivatedRoute: ActivatedRoute,
    private baseLocation: Location
  ) { }

  messages: Message[];
  isInEditMode: boolean = true;

  showMessage(isEditable: boolean, severity: string, summary: string, shouldGoBack: boolean, msg: string): void {
    this.isInEditMode = isEditable;
    this.messages = []
    this.messages.push({ severity: severity, summary: summary, detail: msg })
    if (shouldGoBack) {
      setTimeout(() => {
        this.goBack();
      }, 3000)
    }
  }

  goBack(): void {
    this.baseLocation.back();
  }

}
