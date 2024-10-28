import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PickersModel } from '../models/pickers.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { PickersService } from '../services/pickers.service';
import { AuthService } from 'src/app/service/users/auth.service';
import { Messages } from 'src/app/helpers/messages';

@Component({
  selector: 'app-pickers-dialog',
  templateUrl: './pickers-dialog.component.html',
  styleUrls: ['./pickers-dialog.component.scss']
})
export class PickersDialogComponent implements OnInit {
    @Output() PickersModify = new EventEmitter<PickersModel[]>();
    display: boolean = false;
    loading: boolean = false;
    pickersModel: PickersModel;
    formPickers: FormGroup;
    isAdd: boolean = false;
    user: User;

    constructor(
        private pickersService: PickersService,
        private formBuilder: FormBuilder,
        private authService: AuthService
        ) {
            this.user = this.authService.UserValue;
        }

    ngOnInit(): void {
    }

     showDialog( pickersModel: PickersModel, isAdd: boolean){
        this.new();
        this.isAdd = isAdd;
        this.pickersModel = pickersModel;
        this.display = true;
        this._createForm();
    }
    private _createForm(){

        this.formPickers = this.formBuilder.group({
            id: [this.pickersModel.id??0],
            name: [this.pickersModel.name??"", Validators.required],
            availableMinutes: [this.pickersModel.availableMinutes??"", Validators.required],
            usedMinutes: [this.pickersModel.usedMinutes??"",],
            remainingMinutes: [this.pickersModel.remainingMinutes??"", Validators.required],
            status: [this.pickersModel.status??""],
            userName: []

        });

    }

    new(){
        this.pickersModel = undefined;
        this.formPickers = undefined;
    }

    async addPickers(){
        if(this.formPickers.valid){
            console.log(this.formPickers.value);
            try{
                Messages.loading("Agregando", "Agregando Sams");
                let pickers = await this.pickersService.addPicker(this.formPickers.value);
                Messages.closeLoading();
                Messages.Toas("Agregando Correctamente");
                this.PickersModify.emit(pickers);
                this.display = false;
            }
            catch(ex){
                Messages.closeLoading();
                Messages.warning("Advertencia", ex);
            }
        }
    }
    async editPickers(){
        if(this.formPickers.valid){
            try{
                Messages.loading("Editando", "Editando Usuario");
                let pickers = await this.pickersService.editPicker(this.formPickers.value);
                Messages.closeLoading();
                Messages.Toas("Editado Correctamente");
                this.PickersModify.emit(pickers);
                this.display = false;
            }
            catch(ex){
                Messages.closeLoading();
                Messages.warning("Advertencia", ex);
            }
        }
    }

}

