import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SamsModel } from '../models/sams.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { SamsService } from '../services/sams.service';
import { AuthService } from 'src/app/service/users/auth.service';
import { Messages } from 'src/app/helpers/messages';


@Component({
  selector: 'app-sams-dialog',
  templateUrl: './sams-dialog.component.html',
  styleUrls: ['./sams-dialog.component.scss']
})
export class SamsDialogComponent implements OnInit {
    @Output() SamsModify = new EventEmitter<SamsModel[]>();
    display: boolean = false;
    loading: boolean = false;
    samsModel: SamsModel;
    formSams: FormGroup;
    isAdd: boolean = false;
    user: User;

    constructor(
        private samsService: SamsService,
        private formBuilder: FormBuilder,
        private authService: AuthService
        ) {
            this.user = this.authService.UserValue;
        }

    ngOnInit(): void {
    }

     showDialog( samsModel: SamsModel, isAdd: boolean){
        this.new();
        this.isAdd = isAdd;
        this.samsModel = samsModel;
        this.display = true;
        this._createForm();
    }
    private _createForm(){

        this.formSams = this.formBuilder.group({
            id: [this.samsModel.id??0],
            clientName: [this.samsModel.clientName??"", Validators.required],
            meditionType: [this.samsModel.meditionType??"", Validators.required],
            meditionUnity: [this.samsModel.meditionUnity??"", Validators.required],
            samValue: [this.samsModel.samValue??"", Validators.required],
            userName: []

        });

    }

    new(){
        this.samsModel = undefined;
        this.formSams = undefined;
    }

    async addSams(){
        if(this.formSams.valid){
            console.log(this.formSams.value);
            try{
                Messages.loading("Agregando", "Agregando Sams");
                let sams = await this.samsService.addSams(this.formSams.value);
                Messages.closeLoading();
                Messages.Toas("Agregando Correctamente");
                this.SamsModify.emit(sams);
                this.display = false;
            }
            catch(ex){
                Messages.closeLoading();
                Messages.warning("Advertencia", ex);
            }
        }
    }
    async editSams(){
        if(this.formSams.valid){
            try{
                Messages.loading("Editando", "Editando Usuario");
                let sams = await this.samsService.editSams(this.formSams.value);
                Messages.closeLoading();
                Messages.Toas("Editado Correctamente");
                this.SamsModify.emit(sams);
                this.display = false;
            }
            catch(ex){
                Messages.closeLoading();
                Messages.warning("Advertencia", ex);
            }
        }
    }

}

